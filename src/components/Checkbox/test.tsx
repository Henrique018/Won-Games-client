import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/test/helper';
import Checkbox from '.';

describe('<Checkbox />', () => {
	it('should render with a label', () => {
		renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

		// selecting the input by its role
		expect(screen.getByRole('checkbox')).toBeInTheDocument();

		// selecting the input by its related label
		expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

		//selecting the label by its text
		expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
	});

	it('should render without a label', () => {
		renderWithTheme(<Checkbox />);

		expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
		expect(screen.getByRole('checkbox')).toBeInTheDocument();
		expect(screen.getByRole('checkbox')).toHaveAttribute('id', '');
	});

	it('should render a black label', () => {
		renderWithTheme(
			<Checkbox label="checkbox label" labelFor="check" labelColor="black" />
		);

		expect(screen.getByText(/checkbox label/i)).toHaveStyle({
			color: '#030517',
		});
	});

	it('should dispatch a onCheck when status chenges', async () => {
		const onCheck = jest.fn();

		renderWithTheme(
			<Checkbox label="checkbox label" labelFor="check" onCheck={onCheck} />
		);

		expect(onCheck).not.toHaveBeenCalled();

		userEvent.click(screen.getByRole('checkbox'));
		await waitFor(() => {
			expect(onCheck).toBeCalledTimes(1);
		});
		expect(onCheck).toBeCalledWith(true);
	});

	it('should have a false status when the check is not marked', async () => {
		const onCheck = jest.fn();

		renderWithTheme(
			<Checkbox
				label="checkbox label"
				labelFor="check"
				onCheck={onCheck}
				isChecked
			/>
		);

		userEvent.click(screen.getByRole('checkbox'));
		await waitFor(() => {
			expect(onCheck).toBeCalledTimes(1);
		});
		expect(onCheck).toBeCalledWith(false);
	});

	it('should have keyboard accessibility', () => {
		renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

		expect(window.document.body).toHaveFocus();

		userEvent.tab();

		expect(screen.getByRole('checkbox')).toHaveFocus();
	});
});
