import OrdersList, { OrdersProps } from 'components/OrdersList';
import OrdersMock from 'components/OrdersList/mock';
import Profile from 'templates/Profile';

export function getServerSideProps() {
	return {
		props: {
			items: OrdersMock,
		},
	};
}

export default function Orders({ items }: OrdersProps) {
	return (
		<Profile>
			<OrdersList items={items} />
		</Profile>
	);
}
