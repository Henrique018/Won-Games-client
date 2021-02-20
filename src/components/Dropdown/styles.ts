import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

export const Title = styled.div`
	${({ theme }) => css`
		position: relative;
		cursor: pointer;
		color: ${theme.colors.white};
		display: flex;
		align-items: center;
		padding-right: ${theme.spacings.small};
	`}
`;

export type ContentProps = {
	isOpen?: boolean;
};

const contentModifiers = {
	open: () => css`
		opacity: 1;
		pointer-events: all;
		transform: translateY(0);
	`,
	close: () => css`
		opacity: 0;
		pointer-events: none;
		transform: translateY(-2rem);
	`,
};

export const Content = styled.div<ContentProps>`
	${({ theme, isOpen }) => css`
		display: flex;
		flex-direction: column;
		background: ${theme.colors.white};
		color: ${theme.colors.black};
		margin-top: ${theme.spacings.small};
		position: absolute;
		right: 0;

		&:before {
			content: '';
			position: absolute;
			border-right: 1.2rem solid transparent;
			border-left: 1.2rem solid transparent;
			border-bottom: 1.2rem solid ${theme.colors.white};
			top: -1.2rem;
			right: 2.4rem;
		}

		transition: transform 0.2s ease-in, opacity ${theme.transition.default};
		${isOpen && contentModifiers.open()}
		${!isOpen && contentModifiers.close()}
	`}
`;
