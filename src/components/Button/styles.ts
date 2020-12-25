import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = { hasIcon: boolean } & Pick<
	ButtonProps,
	'size' | 'fullWidth'
>;

const wrapperModifier = {
	large: (theme: DefaultTheme) => css`
		height: 5rem;
		width: 15rem;
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
	`,

	medium: (theme: DefaultTheme) => css`
		height: 4rem;
		width: 12.2rem;
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
	`,

	small: (theme: DefaultTheme) => css`
		height: 3rem;
		width: 9.5rem;
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
};

export const Wrapper = styled.button<WrapperProps>`
	${({ theme, size, fullWidth, hasIcon }) => css`
		color: ${theme.colors.white};
		cursor: pointer;
		border: 0;
		border-radius: ${theme.border.radius};
		padding: ${theme.spacings.xxsmall}
		font-weight: ${theme.font.bold};
		background: linear-gradient(180deg, #FF5F5F -14.51%, #F062C0 102.86%, #F23131 102.86%);

		${!!size && wrapperModifier[size](theme)}
		${!!fullWidth && wrapperModifier.fullWidth()}
		${hasIcon && wrapperModifier.withIcon(theme)}
	`}
`;