import Button from 'components/Button';
import * as S from './styles';

export type HighlightProps = {
	backgroundImage: string;
	title: string;
	subtitle: string;
	buttonLabel: string;
	buttonLink: string;
};

const Highlight = ({
	backgroundImage,
	title,
	subtitle,
	buttonLabel,
	buttonLink,
}: HighlightProps) => {
	return (
		<S.Wrapper backgroundImage={backgroundImage}>
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
