import 'match-media-mock';
import { render, screen } from '@testing-library/react';

import Slider from '.';
import { Settings } from 'react-slick';

const settings: Settings = {
	speed: 500,
	slidesToShow: 2,
	infinite: false,
};

describe('<Slider />', () => {
	it('should render a children as a slider item', () => {
		const { container } = render(
			<Slider settings={settings}>
				<p>Item 1</p>
				<p>Item 2</p>
			</Slider>
		);

		expect(
			screen.getByText(/Item 1/i).parentElement?.parentElement
		).toHaveClass('slick-slide');

		expect(
			screen.getByText(/Item 2/i).parentElement?.parentElement
		).toHaveClass('slick-slide');

		expect(container.firstChild).toMatchSnapshot();
	});
});
