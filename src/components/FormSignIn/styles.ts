import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import * as ButtonStyles from 'components/Button/styles';
import * as TextfieldStyles from 'components/Textfield/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		${TextfieldStyles.Wrapper} {
			margin: ${theme.spacings.xxsmall} 0;
		}
		${ButtonStyles.Wrapper} {
			margin: ${theme.spacings.small} auto ${theme.spacings.xsmall};
		}

		font-size: ${theme.font.sizes.small};
	`};
`;

export const ForgotPassword = styled.a`
	${({ theme }) => css`
		display: block;
		color: ${theme.colors.black};
		text-decoration: none;
		text-align: right;

		&:hover {
			color: ${lighten(0.2, theme.colors.black)};
		}
	`}
`;

export const FormLink = styled.div`
	${({ theme }) => css`
		text-align: center;
		> a {
			color: ${theme.colors.secondary};
			text-decoration: none;
			font-weight: ${theme.font.light};
			margin-left: ${theme.spacings.xxsmall};
			border-bottom: 0.1rem solid ${theme.colors.secondary};
			transition: border color ${theme.transition.fast};

			&:hover {
				color: ${darken(0.1, theme.colors.secondary)};
			}
		}
	`}
`;
