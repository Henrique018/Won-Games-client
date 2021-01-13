import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
	label?: string;
	labelFor?: string;
	initialValue?: string;
	onInput?: (value: string) => void;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Textfield = ({
	label,
	labelFor = '',
	initialValue = '',
	onInput,
	icon,
	iconPosition = 'left',
	disabled = false,
	...props
}: TextFieldProps) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setValue(newValue);

		!!onInput && onInput(newValue);
	};
	return (
		<S.Wrapper>
			{!!label && (
				<S.Label htmlFor={labelFor} disabled={disabled}>
					{label}
				</S.Label>
			)}
			<S.InputWrapper iconPosition={iconPosition}>
				<S.Icon>{!!icon && icon}</S.Icon>
				<S.InputAlignment>
					<S.Input
						inputMode="text"
						type="text"
						id={labelFor}
						onChange={onChange}
						value={value}
						disabled={disabled}
						{...props}
					/>
				</S.InputAlignment>
			</S.InputWrapper>
		</S.Wrapper>
	);
};

export default Textfield;
