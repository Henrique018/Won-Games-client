import { useState } from 'react';
import * as S from './styles';

export type DropdownProps = {
	title: React.ReactNode;
	children: React.ReactNode;
};

const Dropdown = ({ title, children }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDropdownClick = () => {
		const status = !isOpen;
		setIsOpen(status);
	};

	return (
		<S.Wrapper isOpen={isOpen}>
			<S.Title onClick={handleDropdownClick}>{title}</S.Title>
			<S.Content aria-hidden={!isOpen}>{children}</S.Content>
			<S.Overlay onClick={handleDropdownClick} aria-hidden={!isOpen} />
		</S.Wrapper>
	);
};

export default Dropdown;
