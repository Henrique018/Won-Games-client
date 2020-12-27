import * as S from './styles';

export type LineColorsProps = 'primary' | 'secondary';

export type HeadingProps = {
	children: React.ReactNode;
	color?: 'white' | 'black';
	lineLeft?: boolean;
	lineBottom?: boolean;
	size?: 'small' | 'medium';
	lineColor?: LineColorsProps;
};

const Heading = ({
	size = 'medium',
	lineColor = 'primary',
	color = 'black',
	lineLeft = false,
	lineBottom = false,
	children,
}: HeadingProps) => {
	return (
		<S.Wrapper
			color={color}
			lineColor={lineColor}
			lineLeft={lineLeft}
			lineBottom={lineBottom}
			size={size}
		>
			{children}
		</S.Wrapper>
	);
};

export default Heading;
