import { render, screen } from 'utils/test-util';

import GameItem, { PaymentInfoProps } from '.';

const props = {
	img: 'https://source.unsplash.com/user/willianjusten/151x70',
	title: 'Red Dead Redemption',
	price: 'R$ 215,00',
};

describe('<GameItem />', () => {
	it('should render correctly', () => {
		render(<GameItem {...props} />);

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument();

		expect(
			screen.getByRole('img', { name: /Red Dead Redemption/i })
		).toHaveAttribute('src', props.img);

		expect(screen.getByText('R$ 215,00')).toBeInTheDocument();
	});

	it('should render a download link', () => {
		render(<GameItem {...props} downloadLink={'https://link/'} />);

		expect(
			screen.getByRole('link', { name: `get ${props.title} here` })
		).toHaveAttribute('href', 'https://link/');
	});

	it('should render the payment info', () => {
		const paymentInfo: PaymentInfoProps = {
			number: '*** *** **** 4316',
			flag: 'mastercard',
			img: '/img/MasterCard.png',
			purchaseDate: 'Purchase made on 02/01/2021 at 21:09',
		};

		render(<GameItem {...props} paymentInfo={paymentInfo} />);

		expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
			'src',
			paymentInfo.img
		);

		expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
		expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
	});
});
