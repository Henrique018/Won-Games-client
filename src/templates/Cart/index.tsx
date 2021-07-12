import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';

import Base from 'templates/Base';

import { Divider } from 'components/Divider';
import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import CartList from 'components/CartList';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';

import Heading from 'components/Heading';
import Showcase from 'components/Showcase';

import * as S from './styles';

export type CartProps = {
	recommendedTitle: string;
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
} & Pick<PaymentOptionsProps, 'cards'>;

const CartPage = ({
	cards,
	recommendedTitle,
	recommendedGames,
	recommendedHighlight,
}: CartProps) => {
	const handlePayment = () => ({});

	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary" color="white">
					My cart
				</Heading>
			</Container>

			<Container>
				<S.PaymentWrapper>
					<div>
						<CartList />
					</div>
					<PaymentOptions cards={cards} handlePayment={handlePayment} />
				</S.PaymentWrapper>

				<S.Disclaimer>
					<InfoCircle size={16} /> Your purchase is protected by a secure
					connection from the WON platform. By purchasing from our store you
					agree and agree to our <span>terms of use.</span> After making the
					purchase you are entitled to a refund within a maximum of 30 days,
					without any additional cost, as long as the download of the purchased
					game has not occurred after your purchase.
				</S.Disclaimer>

				<Divider />
			</Container>

			<Showcase
				title={recommendedTitle}
				highlight={recommendedHighlight}
				games={recommendedGames}
			/>
		</Base>
	);
};

export default CartPage;
