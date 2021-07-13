import { screen, render } from 'utils/test-util';

import Loader from '.';

describe('<Loader />', () => {
	it('should render a svg animation as a loader', () => {
		render(<Loader />);

		expect(screen.getByTitle(/Loading.../i)).toBeInTheDocument();
	});
});
