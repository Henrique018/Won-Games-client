import 'match-media-mock';
import { screen, fireEvent } from '@testing-library/react';

import { renderWithTheme } from 'utils/test/helper';
import imagesMock from './mock';
import Gallery from '.';

describe('<Gallery />', () => {
	it('should render the gallery images as buttons', () => {
		renderWithTheme(<Gallery images={imagesMock.slice(0, 2)} />);

		expect(
			screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
		).toHaveAttribute('src', imagesMock[0].src);

		expect(
			screen.getByRole('button', { name: /thumb - Gallery Image 2/i })
		).toHaveAttribute('src', imagesMock[1].src);
	});

	it('should open modal when thumbnail is clicked', () => {
		renderWithTheme(<Gallery images={imagesMock.slice(0, 2)} />);

		const modal = screen.getByLabelText('modal');

		// check if the modal is hidden
		expect(modal.getAttribute('aria-hidden')).toBe('true');
		expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

		// on click thumbnail, a modal should be visible
		const thumbnail = screen.getByRole('button', {
			name: /thumb - Gallery Image 2/i,
		});

		fireEvent.click(thumbnail);
		expect(modal.getAttribute('aria-hidden')).toBe('false');
		// check if the modal is visible
		expect(modal).toHaveStyle({ opacity: 1 });
	});

	it('should close modal when button or overlay is clicked', () => {
		renderWithTheme(<Gallery images={imagesMock.slice(0, 2)} />);

		const modal = screen.getByLabelText('modal');

		const thumbnail = screen.getByRole('button', {
			name: /thumb - Gallery Image 2/i,
		});

		// open modal
		fireEvent.click(thumbnail);

		// onclick, the modal should be hidden
		fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
		expect(modal.getAttribute('aria-hidden')).toBe('true');
		expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });
	});

	it('should close the modal when ESC is pressed', () => {
		const { container } = renderWithTheme(
			<Gallery images={imagesMock.slice(0, 2)} />
		);

		const modal = screen.getByLabelText('modal');

		const thumbnail = screen.getByRole('button', {
			name: /thumb - Gallery Image 2/i,
		});

		// open modal
		fireEvent.click(thumbnail);

		// pressing ESC, the modal should be hidden
		fireEvent.keyUp(container, { key: 'Escape' });
		expect(modal.getAttribute('aria-hidden')).toBe('true');
		expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });
	});

	it('should open the selected image on modal', async () => {
		renderWithTheme(<Gallery images={imagesMock.slice(0, 2)} />);

		const thumbnail = screen.getByRole('button', {
			name: /thumb - Gallery Image 2/i,
		});

		fireEvent.click(thumbnail);

		const modalImg = await screen.findByRole('img', {
			name: /Gallery Image 2/i,
		});

		expect(modalImg.parentElement?.parentElement).toHaveClass('slick-active');
	});
});
