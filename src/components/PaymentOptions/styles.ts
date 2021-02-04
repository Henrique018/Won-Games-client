import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		padding: ${theme.spacings.xsmall};

		${CardItem}, ${AddCard} {
			height: 5rem;
			display: flex;
			align-items: center;
			background-color: ${theme.colors.lightGray};
			padding: 0 ${theme.spacings.xxsmall};
			margin: ${theme.spacings.xxsmall} 0;
			border-radius: 0.2rem;
			cursor: pointer;
		}
	`}
`;

export const Body = styled.div`
	${({ theme }) => css`
		> div {
			margin-top: ${theme.spacings.medium};
		}
	`}
`;

export const Footer = styled.div`
	${({ theme }) => css`
		display: flex;
		margin-top: ${theme.spacings.large};

		${ButtonStyles.Wrapper} {
			padding-left: ${theme.spacings.xxsmall};
			padding-right: ${theme.spacings.xxsmall};
			outline: 0;
		}
	`}
`;

export const CardsList = styled.div``;

export const CardItem = styled.label`
	justify-content: space-between;
`;

export const CardInfo = styled.div`
	${({ theme }) => css`
		img {
			margin-right: ${theme.spacings.xxsmall};
		}
	`}
`;

export const AddCard = styled.div`
	${({ theme }) => css`
		svg {
			margin-right: ${theme.spacings.xxsmall};
		}
	`}
`;
