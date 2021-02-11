import CardsList, { CardsListProps } from 'components/CardsList';
import Profile from 'templates/Profile';

import cardsMock from 'components/PaymentOptions/mock';

export function getServerSideProps() {
	return {
		props: {
			cards: cardsMock,
		},
	};
}

export default function Cards({ cards }: CardsListProps) {
	return (
		<Profile>
			<CardsList cards={cards} />
		</Profile>
	);
}
