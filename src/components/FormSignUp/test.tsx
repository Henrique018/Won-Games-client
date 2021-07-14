import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from 'utils/test-util';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
	it('should render all the form elements to sign up', () => {
		render(
			<MockedProvider>
				<FormSignUp />
			</MockedProvider>
		);

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
		render(
			<MockedProvider>
				<FormSignUp />
			</MockedProvider>
		);

		expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument();
	});
});
