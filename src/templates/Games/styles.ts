import styled, { css } from 'styled-components';

import { Container } from 'components/Container';
import media from 'styled-media-query';

export const Main = styled(Container).attrs({ as: 'main' })`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;

		${media.greaterThan('medium')`
			display: grid;
			grid-template-columns: 30rem 1fr;
			gap: ${theme.grid.gutter};
		`}
	`}
`;

export const SidebarWrapper = styled.div`
	max-width: 25rem;
`;

export const SeeMore = styled.div`
	${({ theme }) => css`
		text-align: center;
		text-transform: uppercase;
		color: ${theme.colors.white};
		font-weight: ${theme.font.bold};
		padding: ${theme.spacings.medium};

		cursor: pointer;
		svg {
			color: ${theme.colors.primary};
			margin-top: ${theme.spacings.xxsmall};
		}
	`}
`;
