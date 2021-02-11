import Heading from 'components/Heading';
import { PaymentOptionsProps } from 'components/PaymentOptions';
import * as S from './styles';

export type CardsListProps = Pick<PaymentOptionsProps, 'cards'>;

const CardsList = ({ cards }: CardsListProps) => {
	return (
		<S.Wrapper>
			<Heading size="small" lineBottom>
				My cards
			</Heading>

			<S.CardsList>
				{cards?.map((card) => (
					<S.CardItem key={card.number}>
						<S.CardInfo>
							<img src={card.img} alt={card.flag} />
							{card.number}
						</S.CardInfo>
					</S.CardItem>
				))}
			</S.CardsList>
		</S.Wrapper>
	);
};

export default CardsList;
