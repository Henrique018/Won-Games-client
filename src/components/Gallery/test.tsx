import 'match-media-mock';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/test/helper';
import imagesMock from './mock';
import Gallery from '.';

describe('<Gallery />', () => {
	it('should render the heading', () => {
		renderWithTheme(<Gallery images={imagesMock} />);

		expect(screen.getAllByRole('button'));
	});
});
