import Link from 'next/link';
import { FavoriteBorder, ExitToApp } from '@styled-icons/material-outlined';
import { UserCircle } from '@styled-icons/boxicons-regular';
import { ArrowIosDownwardOutline as ArrowDown } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

import Dropdown from 'components/Dropdown';
import React from 'react';
import * as S from './styles';

export type UserDropdownProps = {
	username: string;
};

const UserDropdown = ({ username }: UserDropdownProps) => {
	return (
		<Dropdown
			title={
				<>
					<UserCircle size={24} />
					<S.Username>{username}</S.Username>
					<ArrowDown size={24} />
				</>
			}
		>
			<nav>
				<S.Ul>
					<li>
						<Link href="/profile/me" passHref>
							<S.Link>
								<UserCircle />
								My account
							</S.Link>
						</Link>
					</li>
					<li>
						<Link href="/wishlist" passHref>
							<S.Link>
								<FavoriteBorder />
								Wishlist
							</S.Link>
						</Link>
					</li>
					<li>
						<Link href="/logout" passHref>
							<S.Link>
								<ExitToApp />
								Sign out
							</S.Link>
						</Link>
					</li>
				</S.Ul>
			</nav>
		</Dropdown>
	);
};

export default UserDropdown;
