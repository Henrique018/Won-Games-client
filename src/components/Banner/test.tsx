import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Banner, { BannerProps } from '.';

const args = {
	img: 'https://source.unsplash.com/user/willianjusten/1042x580',
	title: 'Defy death',
	subtitle: '<p>Play the new <strong>CrashLands</strong> season',
	buttonLabel: 'Buy now',
	buttonLink: '/games/defy-death',
} as BannerProps;
// todo banner tests..
describe('<Banner />', () => {
	it('should render the banner correctly', () => {
		const { container } = renderWithTheme(<Banner {...args} />);

		expect(screen.getByRole('img')).toHaveAttribute('src');

		expect(
			screen.getByRole('heading', { name: /Defy death/i })
		).toBeInTheDocument();

		expect(screen.getByRole('link')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
