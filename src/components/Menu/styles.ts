import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: ${theme.spacings.xsmall} 0;
		position: relative;
		z-index: ${theme.layers.menu};
	`}
`;

export const MenuGroup = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-grow: 1;
		justify-content: flex-end;
		align-items: center;

		> div {
			margin-left: ${theme.spacings.xsmall};
		}
	`}
`;

export const LogoWrapper = styled.div`
	${media.lessThan('medium')`
		position: absolute;
		left: 50%;
		transform: translateX(-50%)
`}
`;

export const IconWrapper = styled.div`
	${({ theme }) => css`
		width: 2.4rem;
		height: 2.4rem;
		cursor: pointer;
		color: ${theme.colors.white};
		margin-right: ${theme.spacings.xsmall};
	`}
`;

export const MenuNav = styled.div`
	${({ theme }) => css`
		${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
	`}
`;
export const MenuLink = styled.a`
	${({ theme }) => css`
		position: relative;
		font-size: ${theme.font.sizes.medium};
		color: ${theme.colors.white};
		margin: 0.3rem ${theme.spacings.small} 0;
		text-decoration: none;
		text-align: center;

		&:hover {
			&::after {
				content: '';
				position: absolute;
				display: block;
				height: 0.3rem;
				background-color: ${theme.colors.primary};
				animation: hoverAnimation 0.2s forwards;
			}

			@keyframes hoverAnimation {
				from {
					width: 0;
					left: 50%;
				}

				to {
					width: 100%;
					left: 0;
				}
			}
		}
	`}
`;

type MenuFullProps = {
	isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
	${({ isOpen, theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: space-space-between;

		height: 100vh;
		background-color: ${theme.colors.white};
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		transition: opacity 0.3s ease-in-out;
		opacity: ${isOpen ? 1 : 0};
		pointer-events: ${isOpen ? 'all' : 'none'};
		z-index: ${theme.layers.menu};

		> svg {
			position: absolute;
			top: 0;
			right: 0;
			height: 2.4rem;
			width: 2.4rem;
			margin: ${theme.spacings.xsmall};
			cursor: pointer;
		}

		${MenuNav} {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex: 1;
		}

		${MenuLink} {
			color: ${theme.colors.black};
			font-weight: ${theme.font.bold};
			font-size: ${theme.font.sizes.xlarge};
			margin-bottom: ${theme.spacings.small};
			transform: ${isOpen ? 'translateX(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}

		${RegisterBox} {
			transform: ${isOpen ? 'translateX(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}
	`}
`;

export const RegisterBox = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

		> span {
			display: block;
			font-size: ${theme.font.sizes.xsmall};
			margin: ${theme.spacings.small} 0;
		}
	`}
`;

export const CreateAccount = styled.a`
	${({ theme }) => css`
		text-decoration: none;
		color: ${theme.colors.primary};
		border-bottom: 0.2rem solid ${theme.colors.primary};
	`}
`;
