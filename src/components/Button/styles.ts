import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

export type WrapperProps = { hasIcon: boolean } & Pick<
	ButtonProps,
	'size' | 'fullWidth' | 'minimal'
>;

const wrapperModifier = {
	large: (theme: DefaultTheme) => css`
		height: 5rem;
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
	`,

	medium: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
	`,

	small: (theme: DefaultTheme) => css`
		height: 3rem;
		font-size: ${theme.font.sizes.xsmall};
	`,

	fullWidth: () => css`
		width: 100%;
	`,
	withIcon: (theme: DefaultTheme) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			width: 1.5rem;

			& + span {
				margin-left: ${theme.spacings.xxsmall};
			}
		}
	`,

	minimal: (theme: DefaultTheme) => css`
		background: none;
		color: ${theme.colors.primary};

		&:hover {
			color: ${darken(0.2, theme.colors.primary)};
		}
	`,
	disabled: () => css`
		&:disabled {
			cursor: not-allowed;
			filter: saturate(30%);
		}
	`,
};

export const Wrapper = styled.button<WrapperProps>`
	${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.white};
		cursor: pointer;
		border: 0;
		border-radius: ${theme.border.radius};
		padding: ${theme.spacings.xxsmall};
		text-decoration: none;
		background: linear-gradient(
			180deg,
			#ff5f5f -14.51%,
			#f062c0 102.86%,
			#f23131 102.86%
		);

		&:hover {
			background: ${minimal
				? 'none'
				: `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
		}

		${!!size && wrapperModifier[size](theme)}
		${!!fullWidth && wrapperModifier.fullWidth()}
		${hasIcon && wrapperModifier.withIcon(theme)}
		${!!minimal && wrapperModifier.minimal(theme)}
		${disabled && wrapperModifier.disabled()}
	`}
`;
