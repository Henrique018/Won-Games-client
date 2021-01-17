import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps, LineColorsProps } from '.';

const wrapperModifiers = {
	small: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.medium};
		&::after {
			width: 2.5rem;
			bottom: -0.3rem;
		}
	`,
	medium: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.xlarge};

		${media.greaterThan('medium')`
		font-size: ${theme.font.sizes.xxlarge};
	`}
	`,
	huge: (theme: DefaultTheme) => css`
		font-size: ${theme.font.sizes.huge};
	`,
	lineLeft: (theme: DefaultTheme, lineColor: LineColorsProps) => css`
		padding-left: ${theme.spacings.xxsmall};
		border-left: 0.7rem solid ${theme.colors[lineColor]};
	`,
	lineBottom: (theme: DefaultTheme, lineColor: LineColorsProps) => css`
		position: relative;

		&::after {
			position: absolute;
			left: 0;
			bottom: -1rem;
			content: '';
			width: 5rem;
			border-bottom: 0.5rem solid ${theme.colors[lineColor]};
		}
	`,
};

export const Wrapper = styled.h2<HeadingProps>`
	${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
		color: ${theme.colors[color!]};

		${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
		${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
		${!!size && wrapperModifiers[size](theme)}

		font-weight: ${theme.font.bold};
	`}
`;
