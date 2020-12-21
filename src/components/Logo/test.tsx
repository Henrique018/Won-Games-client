import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
	it('should render with color white by default', () => {
		renderWithTheme(<Logo />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('should render with color black when property is passed', () => {
		renderWithTheme(<Logo color="black" />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			color: '#030517',
		});
	});

	it('should render a bigger logo when property large is passed', () => {
		renderWithTheme(<Logo size="large" />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			width: '20rem',
		});
	});

	it('should render a normal logo as default', () => {
		renderWithTheme(<Logo />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
			width: '11rem',
		});
	});

	it('should render a logo without text when property collapseOnMobile is passed', () => {
		renderWithTheme(<Logo collapseOnMobile />);
		expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
			'width',
			'5.8rem',
			{
				media: '(max-width: 768px)',
			}
		);
	});
});
