import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';

export const Wrapper = styled.div``;

type InputWrapperProps = Pick<TextFieldProps, 'iconPosition' | 'disabled'>;

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

export const Input = styled.input<InputWrapperProps>`
	${({ theme, disabled }) => css`
		color: ${theme.colors.black};
		font-family: ${theme.font.family};
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall};
		background: transparent;
		border: 0;
		outline: none;
		width: 100%;
		cursor: ${disabled ? 'not-allowed' : 'pointer'};

		&::placeholder {
			color: ${disabled ? theme.colors.disabled : theme.colors.black};
		}
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

export const Label = styled.label<InputWrapperProps>`
	${({ theme, disabled }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${disabled ? theme.colors.disabled : theme.colors.black};
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
	`}
`;
