import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div``;

export const Form = styled.form`
	${({ theme }) => css`
		max-width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: ${theme.spacings.small};
		margin-top: ${theme.spacings.small};

		> button {
			width: 100%;
		}

		${media.greaterThan('medium')`
			grid-template-columns: 1fr 1fr;
			gap: ${theme.spacings.medium};

			> button {
				grid-column: 2;
				justify-self: end;
				margin-top: 0;
				max-width: 20rem;
			}
		`};
	`}
`;
