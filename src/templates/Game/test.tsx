import {} from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Game from '.';

describe('<Game />', () => {
	it('should render the heading', () => {
		renderWithTheme(<Game cover="" />);
	});
});
