import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const PaymentWrapper = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		margin: ${theme.spacings.large} 0;

		${media.greaterThan('medium')`
			grid-template-columns: 2fr 1fr;
		`};
	`};
`;

export const Disclaimer = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.gray};
		font-size: ${theme.font.sizes.small};
		line-height: 2.1rem;

		> span,
		svg {
			color: ${theme.colors.primary};
		}
	`};
`;
