import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
	label?: string;
	initialValue?: string;
	onInput?: (value: string) => void;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	disabled?: boolean;
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Textfield = ({
	label,
	name,
	initialValue = '',
	onInput,
	icon,
	iconPosition = 'left',
	disabled = false,
	error,
	...props
}: TextFieldProps) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setValue(newValue);

		onInput && onInput(newValue);
	};

	return (
		<S.Wrapper error={!!error} disabled={disabled}>
			{!!label && <S.Label htmlFor={name}>{label}</S.Label>}
			<S.InputWrapper iconPosition={iconPosition}>
				<S.Icon>{!!icon && icon}</S.Icon>
				<S.InputAlignment>
					<S.Input
						inputMode="text"
						type="text"
						onChange={onChange}
						value={value}
						disabled={disabled}
						name={name}
						{...(label ? { id: name } : {})}
						{...props}
					/>
				</S.InputAlignment>
			</S.InputWrapper>
			{!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
		</S.Wrapper>
	);
};

export default Textfield;
