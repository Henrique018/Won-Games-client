import { renderWithTheme } from 'utils/test/helper';

import { Container } from '.';

describe('<Container />', () => {
	it('should render the heading', () => {
		const { container } = renderWithTheme(
			<Container>
				<span>Won Games</span>
			</Container>
		);

		expect(container.firstChild).toMatchInlineSnapshot(`
		.c0 {
		  max-width: 130rem;
		  margin-left: auto;
		  margin-right: auto;
		  padding-left: calc(3.2rem / 2);
		  padding-right: calc(3.2rem / 2);
		}

		<section
		  class="c0"
		>
		  <span>
		    Won Games
		  </span>
		</section>
	`);
	});
});
