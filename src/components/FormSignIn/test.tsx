import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
	it('should render the form', () => {
		renderWithTheme(<FormSignIn />);

		expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /Sign now/i })
		).toBeInTheDocument();
	});

	it('should render forgot password link', () => {
		renderWithTheme(<FormSignIn />);

		expect(
			screen.getByRole('link', { name: /forgot your password\?/i })
		).toBeInTheDocument();
	});

	it('should render the formLink', () => {
		renderWithTheme(<FormSignIn />);

		expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
	});
});
