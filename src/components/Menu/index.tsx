import Link from 'next/link';
import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill';
import {
	Close as CloseIcon,
	Search as SearchIcon,
	ShoppingCart as ShoppingCartIcon,
} from '@styled-icons/material-outlined';

import * as S from './styles';
import Logo from 'components/Logo';
import MatchMedia from 'components/MediaMatch';
import Button from 'components/Button';

export type MenuProps = {
	username?: string;
};

const Menu = ({ username }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Wrapper>
			<MatchMedia lessThan="medium">
				<S.IconWrapper>
					<MenuIcon aria-label="open menu" onClick={() => setIsOpen(true)} />
				</S.IconWrapper>
			</MatchMedia>

			<S.LogoWrapper>
				<Link href="/" passHref>
					<a>
						<Logo collapseOnMobile />
					</a>
				</Link>
			</S.LogoWrapper>

			<MatchMedia greaterThan="medium">
				<S.MenuNav>
					<Link href="/" passHref>
						<S.MenuLink>Home</S.MenuLink>
					</Link>
					<Link href="/games" passHref>
						<S.MenuLink>Explore</S.MenuLink>
					</Link>
				</S.MenuNav>
			</MatchMedia>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="search" />
				</S.IconWrapper>
				<S.IconWrapper>
					<ShoppingCartIcon aria-label="open shopping cart" />
				</S.IconWrapper>
			</S.MenuGroup>

			<MatchMedia greaterThan="medium">
				<Link href="/sign-up" passHref>
					<Button>Sign up</Button>
				</Link>
			</MatchMedia>

			<MatchMedia lessThan="medium">
				<S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
					<CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
					<S.MenuNav>
						<Link href="/" passHref>
							<S.MenuLink>Home</S.MenuLink>
						</Link>
						<Link href="/games" passHref>
							<S.MenuLink>Explore</S.MenuLink>
						</Link>
						{!!username && (
							<>
								<S.MenuLink href="#">My account</S.MenuLink>
								<S.MenuLink href="#">My wishlist</S.MenuLink>
							</>
						)}
					</S.MenuNav>
					{!username && (
						<>
							<S.RegisterBox>
								<Link href="/sign-in" passHref>
									<Button fullWidth size="large">
										Sign in now
									</Button>
								</Link>
								<span>or</span>
								<Link href="/sign-up" passHref>
									<S.CreateAccount href="#" title="Sign up">
										Sign up
									</S.CreateAccount>
								</Link>
							</S.RegisterBox>
						</>
					)}
				</S.MenuFull>
			</MatchMedia>
		</S.Wrapper>
	);
};

export default Menu;
