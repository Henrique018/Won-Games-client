import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';

export const Wrapper = styled.footer`
	${HeadingStyles.Wrapper} {
		${({ theme }) => css`
			text-transform: uppercase;
			margin-bottom: ${theme.spacings.xsmall};
		`}
	}
`;
export const Content = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: minmax(auto, 50%) 1fr;
		gap: ${theme.grid.gutter};
		margin-top: ${theme.spacings.medium};

		${media.greaterThan('medium')`
			grid-template-columns: repeat(4,1fr);
		`}
	`}
`;
export const Column = styled.div`
	${({ theme }) => css`
		a,
		span {
			display: block;
			color: ${theme.colors.darkGray};
			font-size: ${theme.font.sizes.small};
			margin-bottom: ${theme.spacings.xxsmall};
			text-decoration: none;
		}
		a {
			word-wrap: break-word;
			overflow-wrap: break-word;
		}
		a:hover {
			text-decoration: underline;
		}
	`}
`;
export const Copyright = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.gray};
		font-size: ${theme.font.sizes.xsmall};
		margin-top: ${theme.spacings.large};
		margin-bottom: ${theme.spacings.medium};
		text-align: center;
	`}
`;
