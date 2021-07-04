import { render, screen } from 'utils/test-util';

import ProfileMenu from '.';

describe('<ProfileMenu />', () => {
	it('should render the menu', () => {
		const { container } = render(<ProfileMenu />);
		expect(
			screen.getByRole('link', { name: /my profile/i })
		).toBeInTheDocument();

		expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: /my orders/i })
		).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should highlight the active link defined', () => {
		render(<ProfileMenu activeLink="/profile/me" />);

		expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
			backgroundColor: '#F231A5',
			color: '#FAFAFA',
		});
	});
});
