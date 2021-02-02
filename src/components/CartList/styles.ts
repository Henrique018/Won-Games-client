import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { tint } from 'polished';

export const Wrapper = styled.main`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
	`}
`;

export const Footer = styled.footer`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		padding: ${theme.spacings.small};
		background-color: ${tint(0.2, theme.colors.lightGray)};
		color: ${theme.colors.black};
		font-weight: ${theme.font.bold};

		${media.greaterThan('medium')`
			font-size: ${theme.font.sizes.large};
		`}
	`}
`;

export const Total = styled.strong`
	${({ theme }) => css`
		color: ${theme.colors.primary};
	`}
`;
