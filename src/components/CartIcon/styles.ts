import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
	${({ theme }) => css`
		width: 2.4rem;
		height: 2.4rem;
		color: ${theme.colors.white};
		position: relative;
	`}
`;

export const Badge = styled.span`
	${({ theme }) => css`
		width: 1.6rem;
		height: 1.6rem;
		font-size: 1.2rem;
		font-weight: ${theme.font.bold};
		border-radius: 50%;
		background: ${theme.colors.secondary};
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: -0.4rem;
		right: -0.4rem;
	`}
`;
