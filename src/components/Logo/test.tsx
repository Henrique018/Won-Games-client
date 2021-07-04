import { render, screen } from 'utils/test-util';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
	it('should render with an id', () => {
		const { container } = render(<Logo id="myid" />);
		expect(container.querySelector('#paint_linear_myid')).toBeInTheDocument();
	});

	it('should render with color white by default', () => {
		render(<Logo />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('should render with color black when property is passed', () => {
		render(<Logo color="black" />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: '#030517',
		});
	});

	it('should render a bigger logo when property large is passed', () => {
		render(<Logo size="large" />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			width: '20rem',
		});
	});

	it('should render a normal logo as default', () => {
		render(<Logo />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			width: '11rem',
		});
	});

	it('should render a logo without text when property collapseOnMobile is passed', () => {
		render(<Logo collapseOnMobile />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
			'width',
			'5.8rem',
			{
				media: '(max-width: 768px)',
			}
		);
	});
});
