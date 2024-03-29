import { render, screen } from 'utils/test-util';

import Footer from '.';

describe('<Footer />', () => {
	it('should render the footer with contact, follow us, links and location', () => {
		const { container } = render(<Footer />);

		expect(
			screen.getByRole('heading', { name: /contact/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /follow us/i })
		).toBeInTheDocument();

		expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /location/i })
		).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
