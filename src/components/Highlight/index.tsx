import Button from 'components/Button';
import * as S from './styles';

export type HighlightProps = {
	backgroundImage: string;
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
	floatImage?: string;
	alignment?: 'right' | 'left';
};

const Highlight = ({
	backgroundImage,
	floatImage,
	alignment = 'right',
	title,
	subtitle,
	buttonLabel,
	buttonLink,
}: HighlightProps) => {
	return (
		<S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
			{!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
			<S.Content>
				<S.Title>{title}</S.Title>
				<S.Subtitle>{subtitle}</S.Subtitle>
				<Button as="a" href={buttonLink}>
					{buttonLabel}
				</Button>
			</S.Content>
		</S.Wrapper>
	);
};

export default Highlight;
