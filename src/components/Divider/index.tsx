import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Divider = styled.hr`
	${({ theme }) => css`
		background: rgba(181, 181, 181, 0.3);
		border: 0;
		height: 0.1rem;
		margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};

		${media.greaterThan('medium')`
			margin: calc(${theme.spacings.xxlarge} * 2.5) auto ${theme.spacings.medium};
		`}
	`};
`;
