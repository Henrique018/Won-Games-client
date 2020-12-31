import * as S from './styles';
import Button from 'components/Button';
import Ribbon from 'components/Ribbon';
import { sizeProps, colorProps } from 'components/Ribbon';

export type BannerProps = {
	img: string;
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
	ribbonText?: string;
	ribbonSize?: sizeProps;
	ribbonColor?: colorProps;
};

const Banner = ({
	img,
	title,
	subtitle,
	buttonLabel,
	buttonLink,
	ribbonText,
	ribbonSize = 'medium',
	ribbonColor = 'primary',
}: BannerProps) => {
	return (
		<S.Wrapper>
			{!!ribbonText && (
				<Ribbon color={ribbonColor} size={ribbonSize}>
					{ribbonText}
				</Ribbon>
			)}
			<S.Image src={img} role="img" aria-label={title} />

			<S.Caption>
				<S.Title color="white">{title}</S.Title>
				<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
				<Button as="a" href={buttonLink} size="large">
					{buttonLabel}
				</Button>
			</S.Caption>
		</S.Wrapper>
	);
};

export default Banner;
