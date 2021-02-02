import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/test/helper';

import PaymentOptions from '.';
import cardsMock from './mock';

describe('<PaymentOptions />', () => {
	it('should render correctly', () => {
		renderWithTheme(
			<PaymentOptions cards={cardsMock} handlePayment={jest.fn()} />
		);

		expect(
			screen.getByRole('heading', { name: /Payment/i })
		).toBeInTheDocument();

		expect(screen.getByText(/Add a new credit card/i)).toBeInTheDocument();
	});

	it('should handle select card when clicked on label', async () => {
		renderWithTheme(
			<PaymentOptions cards={cardsMock} handlePayment={jest.fn()} />
		);

		userEvent.click(screen.getByLabelText(/4368/));

		await waitFor(() => {
			expect(screen.getByRole('radio', { name: /4368/ })).toBeChecked();
		});
	});

	it('should not call handlePayment when the button is disabled', async () => {
		const handlePayment = jest.fn();
		renderWithTheme(
			<PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
		);

		const button = screen.getByRole('button', { name: /buy now/i });

		userEvent.click(button);

		await waitFor(() => {
			expect(handlePayment).not.toHaveBeenCalled();
		});
	});

	it('should be able to call handlePayment after selecting a card', async () => {
		const handlePayment = jest.fn();
		renderWithTheme(
			<PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
		);

		userEvent.click(screen.getByLabelText(/4368/));

		const button = screen.getByRole('button', { name: /buy now/i });
		userEvent.click(button);

		await waitFor(() => {
			expect(handlePayment).toHaveBeenCalledTimes(1);
		});
	});
});
