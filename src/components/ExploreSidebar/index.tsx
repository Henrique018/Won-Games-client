import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Heading from 'components/Heading';
import Radio from 'components/Radio';
import * as S from './styles';

const ExploreSidebar = () => {
	return (
		<S.Wrapper>
			<Heading color="white" size="small" lineBottom lineColor="secondary">
				Price
			</Heading>

			<Checkbox label="Under $50" name="under-50" labelFor="under-50" />
			<Checkbox label="Under $100" name="under-100" labelFor="under-100" />
			<Checkbox label="Under $150" name="under-150" labelFor="under-150" />
			<Checkbox label="Under $200" name="under-200" labelFor="under-200" />
			<Checkbox label="Free" name="free" labelFor="free" />
			<Checkbox label="Discounted" name="discount" labelFor="discount" />

			<Heading color="white" size="small" lineBottom lineColor="secondary">
				Sort by
			</Heading>

			<Radio
				id="high-to-low"
				label="High to low"
				labelFor="high-to-low"
				name="sorty-by"
			/>
			<Radio
				id="low-to-high"
				label="Low to high"
				labelFor="low-to-high"
				name="sorty-by"
			/>

			<Heading color="white" size="small" lineBottom lineColor="secondary">
				System
			</Heading>

			<Checkbox label="Windows" name="windows" labelFor="windows" />
			<Checkbox label="Linux" name="linux" labelFor="linux" />
			<Checkbox label="Mac OS" name="mac" labelFor="mac" />

			<Heading color="white" size="small" lineBottom lineColor="secondary">
				Genre
			</Heading>

			<Checkbox label="Action" name="action" labelFor="action" />
			<Checkbox label="Adventure" name="adventure" labelFor="adventure" />
			<Checkbox label="FPS" name="FPS" labelFor="FPS" />
			<Checkbox label="MMORPG" name="MMORPG" labelFor="MMORPG" />
			<Checkbox label="RPG" name="RPG" labelFor="RPG" />
			<Checkbox label="Indie" name="indie" labelFor="indie" />
			<Checkbox label="Shooters" name="shooters" labelFor="shooters" />
			<Checkbox label="Simulation" name="simulation" labelFor="simulation" />

			<Button fullWidth>Filter</Button>
		</S.Wrapper>
	);
};

export default ExploreSidebar;
