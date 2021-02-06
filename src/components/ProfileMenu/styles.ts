import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Nav = styled.nav`
	${({ theme }) => css`
		display: flex;
		background-color: ${theme.colors.white};
		font-weight: ${theme.font.normal};
		border: 0;

		${media.greaterThan('medium')`
			font-size: ${theme.font.sizes.large};
			flex-direction: column;
			max-width: 32.2rem;

		`};
	`}
`;
export const Link = styled.a`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		color: ${theme.colors.black};
		text-decoration: none;
		padding: ${theme.spacings.xsmall};
		transition: background, color, ${theme.transition.default};

		&:hover {
			background-color: ${theme.colors.primary};
			color: ${theme.colors.white};
		}

		${media.greaterThan('medium')`
			padding: ${theme.spacings.small};
			span {
				display: inline-block;
				margin-left: ${theme.spacings.xsmall};
			}
		`}

		${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}
	`}
`;
