import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	size?: 'large' | 'medium' | 'small';
	fullWidth?: boolean;
	icon?: React.ReactNode;
	as?: React.ElementType;
} & ButtonTypes;

const Button = ({
	children,
	size = 'medium',
	fullWidth = false,
	icon,
	...props
}: ButtonProps) => {
	return (
		<S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
			{!!icon && icon}
			<span>{children}</span>
		</S.Wrapper>
	);
};

export default Button;
