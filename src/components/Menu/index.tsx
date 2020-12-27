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
				<Logo collapseOnMobile />
			</S.LogoWrapper>

			<MatchMedia greaterThan="medium">
				<S.MenuNav>
					<S.MenuLink href="#">Home</S.MenuLink>
					<S.MenuLink href="#">Explore</S.MenuLink>
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
				<Button>Sign up</Button>
			</MatchMedia>

			<MatchMedia lessThan="medium">
				<S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
					<CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
					<S.MenuNav>
						<S.MenuLink href="#">Home</S.MenuLink>
						<S.MenuLink href="#">Explore</S.MenuLink>
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
								<Button fullWidth size="large">
									Log in now
								</Button>
								<span>or</span>
								<S.CreateAccount href="#" title="Sign up">
									Sign in
								</S.CreateAccount>
							</S.RegisterBox>
						</>
					)}
				</S.MenuFull>
			</MatchMedia>
		</S.Wrapper>
	);
};

export default Menu;
