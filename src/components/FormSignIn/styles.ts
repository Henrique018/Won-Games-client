import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
	`};
`;

export const ForgotPassword = styled.a`
	${() => css`
		text-decoration: none;
	`}
`;

export const FormLink = styled.div`
	${({ theme }) => css`
		text-align: center;
		> a {
			color: ${theme.colors.secondary};
			font-weight: ${theme.font.light};
			text-decoration: underline;
		}
	`}
`;
