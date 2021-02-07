import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import FormProfile from '.';

describe('<FormProfile />', () => {
	it('should render the form profile elements', () => {
		renderWithTheme(<FormProfile />);

		expect(
			screen.getByRole('heading', { name: /My Profile/i })
		).toBeInTheDocument();

		expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
		expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();

		expect(
			screen.getByPlaceholderText(/type your password/i)
		).toBeInTheDocument();

		expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument();

		expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument();
	});
});
