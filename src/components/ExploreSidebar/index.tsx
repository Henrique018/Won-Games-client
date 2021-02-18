import { useState } from 'react';
import { Filter } from '@styled-icons/boxicons-regular/Filter';
import { Close } from '@styled-icons/material-outlined';

import Radio from 'components/Radio';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Checkbox from 'components/Checkbox';

import * as S from './styles';

export type Field = {
	label: string;
	name: string;
};

export type ItemProps = {
	title: string;
	name: string;
	type: string;
	fields: Field[];
};

export type Values = {
	[field: string]: boolean | string;
};

export type ExploreSidebarProps = {
	items: ItemProps[];
	initialValues?: Values;
	onFilter: (values: Values) => void;
};

const ExploreSidebar = ({
	items,
	onFilter,
	initialValues = {},
}: ExploreSidebarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [values, setValues] = useState(initialValues);

	const handleChange = (name: string, value: boolean | string) => {
		setValues((previousValues) => ({ ...previousValues, [name]: value }));
	};

	const handleFilter = () => {
		onFilter(values);
		setIsOpen(false);
	};

	return (
		<S.Wrapper isOpen={isOpen}>
			<S.Overlay aria-hidden={isOpen} />
			<S.IconWrapper>
				<Filter aria-label="open filters" onClick={() => setIsOpen(true)} />
				<Close aria-label="close filters" onClick={() => setIsOpen(false)} />
			</S.IconWrapper>

			<S.Content>
				{items.map((item) => (
					<S.Items key={item.title}>
						<Heading
							lineBottom
							lineColor="secondary"
							size="small"
							color="white"
						>
							{item.title}
						</Heading>

						{item.type === 'checkbox' &&
							item.fields.map((field) => (
								<Checkbox
									key={field.name}
									name={field.name}
									label={field.label}
									labelFor={field.name}
									isChecked={!!values[field.name]}
									onCheck={(v) => handleChange(field.name, v)}
								/>
							))}

						{item.type === 'radio' &&
							item.fields.map((field) => (
								<Radio
									key={field.name}
									id={field.name}
									value={field.name}
									name={item.name}
									label={field.label}
									labelFor={field.name}
									defaultChecked={field.name === values[item.name]}
									onChange={() => handleChange(item.name, field.name)}
								/>
							))}
					</S.Items>
				))}
			</S.Content>

			<S.Footer>
				<Button fullWidth size="medium" onClick={handleFilter}>
					Filter
				</Button>
			</S.Footer>
		</S.Wrapper>
	);
};

export default ExploreSidebar;
