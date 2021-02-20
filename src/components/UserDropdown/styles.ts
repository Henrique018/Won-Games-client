import styled, { css } from 'styled-components';

export const Username = styled.span`
	${({ theme }) => css`
		margin: 0 ${theme.spacings.xxsmall};
	`}
`;

export const Ul = styled.ul`
	list-style: none;
	width: 23rem;
`;

export const Link = styled.a`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		text-decoration: none;
		background: ${theme.colors.white};
		color: ${theme.colors.black};
		padding: ${theme.spacings.xsmall} ${theme.spacings.small};
		transition: background ${theme.transition.fast};

		&:hover {
			color: ${theme.colors.white};
			background-color: ${theme.colors.primary};
		}

		svg {
			width: 2.4rem;
			height: 2.4rem;
			margin-right: ${theme.spacings.xxsmall};
		}
	`}
`;
