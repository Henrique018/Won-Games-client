import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
	it('should render all the form elements to sign up', () => {
		renderWithTheme(<FormSignUp />);

		expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
		expect(screen.getAllByPlaceholderText(/password/i)).toHaveLength(2);
		expect(
			screen.getByRole('button', {
				name: /sign up now/i,
			})
		);
	});

	it('should have a link to sign in', () => {
		renderWithTheme(<FormSignUp />);

		expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument();
	});
});
