import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Email } from '@styled-icons/material-outlined/Email';

import { renderWithTheme } from 'utils/test/helper';
import Textfield from '.';

describe('<Textfield />', () => {
	it('should render with label', () => {
		renderWithTheme(<Textfield label="text field label" labelFor="text" />);

		expect(screen.getByLabelText(/text field label/i)).toBeInTheDocument();
		expect(screen.getByText(/text field label/i)).toBeInTheDocument();
		expect(screen.getByText(/text field label/i)).toHaveAttribute(
			'for',
			'text'
		);
	});

	it('should render without a label', () => {
		renderWithTheme(<Textfield />);

		expect(
			screen.queryByLabelText(/text field label/i)
		).not.toBeInTheDocument();
	});

	it('should render a placeholder', () => {
		renderWithTheme(<Textfield placeholder="email" />);

		expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
	});

	it('should call onInput when input changes', async () => {
		const onInput = jest.fn();
		renderWithTheme(<Textfield placeholder="email" onInput={onInput} />);

		const input = screen.getByRole('textbox');
		const text = 'A simple test';

		userEvent.type(input, text);

		await waitFor(() => {
			expect(onInput).toHaveBeenCalledTimes(text.length);
		});
		expect(onInput).toHaveBeenCalledWith(text);
	});

	it('should have keyboard accessibility', () => {
		renderWithTheme(<Textfield />);

		expect(window.document.body).toHaveFocus();

		userEvent.tab();

		expect(screen.getByRole('textbox')).toHaveFocus();
	});

	it('should render with an icon', () => {
		renderWithTheme(
			<Textfield icon={<Email data-testid="icon" />} placeholder="email" />
		);

		expect(screen.getByTestId('icon')).toBeInTheDocument();
	});

	it('should render a left aligned icon by default', () => {
		renderWithTheme(
			<Textfield icon={<Email data-testid="icon" />} placeholder="email" />
		);

		const inputWrapper = screen.getByRole('textbox').parentElement
			?.parentElement;

		expect(inputWrapper).toHaveStyle({
			'grid-template-areas': "'icon input'",
		});
	});

	it('should render a right aligned icon', () => {
		renderWithTheme(
			<Textfield
				icon={<Email data-testid="icon" />}
				placeholder="email"
				iconPosition="right"
			/>
		);

		const inputWrapper = screen.getByRole('textbox').parentElement
			?.parentElement;

		expect(inputWrapper).toHaveStyle({
			'grid-template-areas': "'input icon'",
		});
	});

	it('should render a disabled input', () => {
		renderWithTheme(<Textfield label="textfield label" disabled />);

		expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
		expect(screen.getByText(/textfield label/i)).toHaveStyle({
			cursor: 'not-allowed',
			color: '#b5b5b5',
		});
	});
});
