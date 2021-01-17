import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Auth from '.';

describe('<Auth />', () => {
	it('should have two logos', () => {
		renderWithTheme(<Auth title="sign in">Children</Auth>);

		expect(screen.queryAllByRole('img', { name: /won games/i })).toHaveLength(
			2
		);
	});

	it('should render all banner & content headings', () => {
		renderWithTheme(<Auth title="sign in">Children</Auth>);
		expect(
			screen.getByRole('heading', {
				name: /All your favorite games in one place/i,
			})
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', {
				name: /won is the best and most complete gaming platform./i,
			})
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /sign in/i })
		).toBeInTheDocument();
	});

	it('should render a children', () => {
		renderWithTheme(
			<Auth title="sign in">
				<input type="text" />
			</Auth>
		);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});
});
