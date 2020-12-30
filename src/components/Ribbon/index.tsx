import * as S from './styles';

export type colorProps = 'primary' | 'secondary';
export type sizeProps = 'medium' | 'small';

export type RibbonProps = {
	children: React.ReactNode;
	color?: colorProps;
	size?: sizeProps;
};

const Ribbon = ({
	children,
	color = 'primary',
	size = 'medium',
}: RibbonProps) => {
	return (
		<S.Wrapper color={color} size={size}>
			{children}
		</S.Wrapper>
	);
};

export default Ribbon;
