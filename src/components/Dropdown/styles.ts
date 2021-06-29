import styled, { css } from 'styled-components';

export const Overlay = styled.div`
	${({ theme }) => css`
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: ${theme.layers.overlay};
	`}
`;

export const Title = styled.div`
	${({ theme }) => css`
		position: relative;
		cursor: pointer;
		color: ${theme.colors.white};
		display: flex;
		align-items: center;
		padding-right: ${theme.spacings.small};
		z-index: ${theme.layers.alwaysOnTop};
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		background: ${theme.colors.white};
		color: ${theme.colors.black};
		margin-top: ${theme.spacings.small};
		position: absolute;
		right: 0;
		z-index: ${theme.layers.alwaysOnTop};

		&:before {
			content: '';
			position: absolute;
			border-right: 1.2rem solid transparent;
			border-left: 1.2rem solid transparent;
			border-bottom: 1.2rem solid ${theme.colors.white};
			top: -1.2rem;
			right: 2.4rem;
		}
	`}
`;

export type WrapperProps = {
	isOpen?: boolean;
};

const WrapperModifiers = {
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

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, isOpen }) => css`
		position: relative;
		width: max-content;

		${Content}, ${Overlay} {
			transition: transform 0.2s ease-in, opacity ${theme.transition.default};
			${isOpen && WrapperModifiers.open()}
			${!isOpen && WrapperModifiers.close()}
		}
	`}
`;
