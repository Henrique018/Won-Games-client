import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/test/helper';

import Radio from '.';

describe('<Radio />', () => {
	it('should render with a label', () => {
		renderWithTheme(
			<Radio name="category" label="radio label" labelFor="radio" />
		);

		expect(screen.getByRole('radio')).toBeInTheDocument();
		expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument();
		expect(screen.getByText(/radio label/i)).toHaveAttribute('for', 'radio');
	});

	it('should render a white label as default', () => {
		renderWithTheme(
			<Radio name="category" label="radio label" labelColor="white" />
		);

		expect(screen.getByText(/radio label/i)).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('should dispatch onCheck when label status changes', async () => {
		const onCheck = jest.fn();

		renderWithTheme(
			<Radio
				name="category"
				label="radio label"
				onCheck={onCheck}
				value="anyValue"
			/>
		);

		userEvent.click(screen.getByRole('radio'));
		await waitFor(() => expect(onCheck).toBeCalledTimes(1));
		expect(onCheck).toHaveBeenCalledWith('anyValue');
	});

	it('should have keyboard accessibility', () => {
		renderWithTheme(<Radio name="category" label="radio label" />);

		expect(window.document.body).toHaveFocus();

		userEvent.tab();

		expect(screen.getByRole('radio')).toHaveFocus();
	});
});
