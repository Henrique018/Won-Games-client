import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { tint } from 'polished';

import * as EmptyStyles from 'components/Empty/styles';

export type WrapperProps = {
	isEmpty: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, isEmpty }) => css`
		background-color: ${theme.colors.white};
		display: flex;
		flex-direction: column;
		align-self: flex-start;

		${isEmpty &&
		css`
			${EmptyStyles.Wrapper} {
				padding-bottom: ${theme.spacings.medium};
			}
			${EmptyStyles.Image} {
				max-width: 20rem;
			}
			${EmptyStyles.Title} {
				font-size: ${theme.font.sizes.medium};
			}
			${EmptyStyles.Description} {
				color: ${theme.colors.black};
				font-size: ${theme.font.sizes.small};
			}
		`}
	`}
`;

export const Footer = styled.footer`
	${({ theme }) => css`
		display: flex;
		align-items: center;
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
