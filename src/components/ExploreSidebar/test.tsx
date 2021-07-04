import { render, screen, fireEvent } from 'utils/test-util';

import items from './mock';
import ExploreSidebar from '.';

describe('<ExploreSidebar />', () => {
	it('should render the headings', () => {
		render(<ExploreSidebar items={items} onFilter={jest.fn} />);

		expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /sort by/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /Platforms/i })
		).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument();
	});

	it('should render all inputs', () => {
		render(<ExploreSidebar items={items} onFilter={jest.fn} />);

		expect(
			screen.getByRole('checkbox', { name: /under \$50/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('radio', { name: /high to low/i })
		).toBeInTheDocument();
	});

	it('should render a filter button', () => {
		render(<ExploreSidebar items={items} onFilter={jest.fn} />);

		expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
	});

	it('should render checked inputs when initial values are passed', () => {
		render(
			<ExploreSidebar
				items={items}
				initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
				onFilter={jest.fn}
			/>
		);

		expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();
		expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked();
	});

	it('should filter initial values', () => {
		const onFilter = jest.fn();
		render(
			<ExploreSidebar
				items={items}
				initialValues={{
					platforms: ['windows', 'linux'],
					sort_by: 'low-to-high',
				}}
				onFilter={onFilter}
			/>
		);

		const button = screen.getByRole('button', { name: /filter/i });

		fireEvent.click(button);

		expect(onFilter).toHaveBeenCalledWith({
			platforms: ['windows', 'linux'],
			sort_by: 'low-to-high',
		});
	});

	it('should filter checked values', () => {
		const onFilter = jest.fn();
		render(
			<ExploreSidebar items={items} initialValues={{}} onFilter={onFilter} />
		);

		const button = screen.getByRole('button', { name: /filter/i });

		fireEvent.click(screen.getByLabelText(/windows/i));
		fireEvent.click(screen.getByLabelText(/low to high/i));
		fireEvent.click(screen.getByLabelText(/free/i));
		fireEvent.click(button);

		expect(onFilter).toHaveBeenCalledWith({
			platforms: ['windows'],
			sort_by: 'low-to-high',
		});

		expect(onFilter).toHaveBeenCalledTimes(4);
	});

	it('should altern between radio buttons', () => {
		const onFilter = jest.fn();
		render(
			<ExploreSidebar items={items} initialValues={{}} onFilter={onFilter} />
		);

		const button = screen.getByRole('button', { name: /filter/i });
		fireEvent.click(screen.getByLabelText(/high to low/i));
		fireEvent.click(screen.getByLabelText(/low to high/i));

		fireEvent.click(button);
		expect(onFilter).toHaveBeenCalledWith({
			sort_by: 'low-to-high',
		});
	});
});
