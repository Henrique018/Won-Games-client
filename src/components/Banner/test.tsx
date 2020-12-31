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

	it('should render the banner with a ribbon', () => {
		renderWithTheme(
			<Banner
				{...args}
				ribbonText="20% OFF"
				ribbonColor="secondary"
				ribbonSize="small"
			/>
		);

		expect(screen.queryByText(/20% OFF/i)).toBeInTheDocument();

		expect(screen.queryByText(/20% OFF/i)).toHaveStyle({
			backgroundColor: '#3CD3C1',
		});

		expect(screen.queryByText(/20% OFF/i)).toHaveStyle({
			fontSize: '1.2rem',
			height: '2.4rem',
		});
	});
});
