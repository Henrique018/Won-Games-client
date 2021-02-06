import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import ProfileMenu from '.';

describe('<ProfileMenu />', () => {
	it('should render the menu', () => {
		renderWithTheme(<ProfileMenu />);

		expect(screen.getAllByRole('link')).toHaveLength(4);
	});
});
