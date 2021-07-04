import { render } from 'utils/test-util';
import { FormLink, FormWrapper } from '.';

describe('<Form />', () => {
	it('should have the form styles', () => {
		const { container } = render(
			<FormWrapper>
				<FormLink>
					<a href="#">my test link</a>
				</FormLink>
			</FormWrapper>
		);

		expect(container.firstChild).toMatchInlineSnapshot(`
		.c0 {
		  font-size: 1.4rem;
		}

		.c0 .sc-iCoGMd {
		  margin: 0.8rem 0 0.8rem;
		}

		.c0 .sc-bdnxRM {
		  margin: 2.4rem auto 1.6rem;
		}

		.c1 {
		  text-align: center;
		}

		.c1 > a {
		  color: #3CD3C1;
		  -webkit-text-decoration: none;
		  text-decoration: none;
		  margin-left: 0.8rem;
		  border-bottom: 0.1rem solid #3CD3C1;
		  -webkit-transition: border color 0.1s ease-in-out;
		  transition: border color 0.1s ease-in-out;
		}

		.c1 > a:hover {
		  color: #29b3a3;
		}

		<div
		  class="c0"
		>
		  <div
		    class="c1"
		  >
		    <a
		      href="#"
		    >
		      my test link
		    </a>
		  </div>
		</div>
	`);
	});
});
