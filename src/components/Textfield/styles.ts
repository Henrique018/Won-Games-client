import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

type InputWrapperProps = Pick<TextFieldProps, 'iconPosition'>;
type WrapperProps = { error: boolean } & Pick<TextFieldProps, 'disabled'>;

const inputWrapperModifier = {
	left: () => css`
		grid-template-areas: 'icon input';
	`,
	right: () => css`
		grid-template-areas: 'input icon';
	`,
};

export const InputWrapper = styled.div<InputWrapperProps>`
	${({ theme, iconPosition }) => css`
		display: grid;
		background: ${theme.colors.lightGray};
		border-radius: 0.2rem;
		padding: 0 ${theme.spacings.xsmall};
		border: 0.2rem solid;
		border-color: ${theme.colors.lightGray};

		&:focus-within {
			box-shadow: 0 0 0.5rem ${theme.colors.primary};
		}
		${inputWrapperModifier[iconPosition!]};
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.font.family};
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall};
		background: transparent;
		border: 0;
		outline: none;
		width: 100%;
	`}
`;

export const InputAlignment = styled.div`
	grid-area: input;
`;

export const Icon = styled.div`
	${({ theme }) => css`
		grid-area: icon;
		display: flex;
		width: 2rem;
		color: ${theme.colors.gray};

		& > svg {
			width: 100%;
		}
	`}
`;

export const Label = styled.label`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
	`}
`;

const wrapperModifier = {
	disabled: (theme: DefaultTheme) => css`
		${Icon},
		${Input},
		${Label} {
			cursor: not-allowed;
			color: ${theme.colors.disabled};
			&::placeholder {
				color: currentColor;
			}
		}
	`,

	error: (theme: DefaultTheme) => css`
		${Label},
		${Icon} {
			color: ${theme.colors.danger};
		}

		${InputWrapper} {
			border-color: ${theme.colors.danger};
		}
	`,
};

export const ErrorMessage = styled.span`
	${({ theme }) => css`
		color: red;
		font-size: ${theme.font.sizes.xsmall};
	`}
`;

export const Wrapper = styled.form<WrapperProps>`
	${({ theme, disabled, error }) => css`
		${!!disabled && wrapperModifier.disabled(theme)}
		${error && wrapperModifier.error(theme)}
	`};
`;
