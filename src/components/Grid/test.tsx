import { renderWithTheme } from 'utils/test/helper';
import { Grid } from '.';

describe('<Grid />', () => {
	it('should render correctly', () => {
		const { container } = renderWithTheme(<Grid />);

		expect(container.firstChild).toMatchInlineSnapshot(`
		.c0 {
		  display: grid;
		  gap: 2.4rem;
		  grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
		  margin: 3.2rem 0;
		}

		<div
		  class="c0"
		/>
	`);
	});
});
