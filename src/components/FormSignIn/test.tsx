import { render, screen } from 'utils/test-util';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
	it('should render the form', () => {
		render(<FormSignIn />);

		expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /Sign now/i })
		).toBeInTheDocument();
	});

	it('should render forgot password link', () => {
		render(<FormSignIn />);

		expect(
			screen.getByRole('link', { name: /forgot your password\?/i })
		).toBeInTheDocument();
	});

	it('should render the formLink', () => {
		render(<FormSignIn />);

		expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
	});
});
