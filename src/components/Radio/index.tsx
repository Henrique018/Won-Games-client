import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
	onCheck?: (value?: RadioValue) => void;
	label?: string;
	labelFor?: string;
	labelColor?: 'black' | 'white';
	value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
	label,
	labelFor = '',
	labelColor = 'white',
	value,
	onCheck,
	...props
}: RadioProps) => {
	const onChange = () => {
		!!onCheck && onCheck(value);
	};

	return (
		<S.Wrapper>
			<S.Input
				type="radio"
				id={labelFor}
				value={value}
				onChange={onChange}
				{...props}
			/>
			{!!label && (
				<S.Label htmlFor={labelFor} labelColor={labelColor}>
					{label}
				</S.Label>
			)}
		</S.Wrapper>
	);
};

export default Radio;
