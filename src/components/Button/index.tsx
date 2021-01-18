import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	size?: 'large' | 'medium' | 'small';
	fullWidth?: boolean;
	icon?: React.ReactNode;
	as?: React.ElementType;
	minimal?: boolean;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
	{
		children,
		size = 'medium',
		fullWidth = false,
		icon,
		minimal = false,
		...props
	},
	ref
) => {
	return (
		<S.Wrapper
			size={size}
			fullWidth={fullWidth}
			hasIcon={!!icon}
			minimal={minimal}
			ref={ref}
			{...props}
		>
			{!!icon && icon}
			{!!children && <span>{children}</span>}
		</S.Wrapper>
	);
};

export default forwardRef(Button);
