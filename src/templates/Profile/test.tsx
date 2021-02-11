import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Profile from '.';

describe('<Profile />', () => {
	it('should render the profile elements correctly', () => {
		renderWithTheme(
			<Profile>
				<div>a simple component</div>
			</Profile>
		);

		expect(
			screen.getByRole('heading', { name: /My profile/i })
		).toBeInTheDocument();
	});
});
