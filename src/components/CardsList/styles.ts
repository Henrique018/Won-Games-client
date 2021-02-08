import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		padding: 1.3rem ${theme.spacings.xsmall};
	`};
`;

export const CardsList = styled.div`
	${({ theme }) => css`
		margin-top: ${theme.spacings.small};
	`}
`;

export const CardItem = styled.div`
	${({ theme }) => css`
		height: 5rem;
		display: flex;
		align-items: center;
		background-color: ${theme.colors.lightGray};
		padding: 0 ${theme.spacings.xxsmall};
		margin: ${theme.spacings.xxsmall} 0;
	`};
`;

export const CardInfo = styled.div`
	${({ theme }) => css`
		img {
			margin-right: ${theme.spacings.xxsmall};
		}
	`}
`;
