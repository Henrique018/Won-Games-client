import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		background-color: ${theme.colors.white};
		padding: ${theme.spacings.xsmall};

		${RibbonStyles.Wrapper} {
			right: -1rem;
			border-radius: 2px;
			&:before {
				border-right-width: 1rem;
			}
		}
		${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &:before {
          border: none;
        }
      }
    `}
	`}
`;

export const Description = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.gray};
		font-weight: ${theme.font.normal};
		line-height: 2.1rem;
		margin: ${theme.spacings.xsmall} 0 ${theme.spacings.small} 0;

		${media.greaterThan('medium')`
			max-width: 77rem;
		`}
	`}
`;

export const ButtonsWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		> button {
			width: 100%;
			margin-bottom: ${theme.spacings.xxsmall};
		}
		${media.greaterThan('medium')`
      flex-direction: row-reverse;
      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
	`}
`;
