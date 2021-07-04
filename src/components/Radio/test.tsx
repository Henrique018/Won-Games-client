import { render, screen, waitFor } from 'utils/test-util';
import userEvent from '@testing-library/user-event';

import Radio from '.';

describe('<Radio />', () => {
	it('should render with a label', () => {
		render(<Radio name="category" label="radio label" labelFor="radio" />);

		expect(screen.getByRole('radio')).toBeInTheDocument();
		expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument();
		expect(screen.getByText(/radio label/i)).toHaveAttribute('for', 'radio');
	});

	it('should render a white label as default', () => {
		render(<Radio name="category" label="radio label" labelColor="white" />);

		expect(screen.getByText(/radio label/i)).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('should dispatch onCheck when label status changes', async () => {
		const onCheck = jest.fn();

		render(
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
		render(<Radio name="category" label="radio label" />);

		expect(window.document.body).toHaveFocus();

		userEvent.tab();

		expect(screen.getByRole('radio')).toHaveFocus();
	});
});
