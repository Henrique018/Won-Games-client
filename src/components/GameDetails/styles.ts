import { darken } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
	${({ theme }) => css`
		margin: ${theme.spacings.small} 0;
	`}
`;
export const Content = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.white};
		margin-top: ${theme.spacings.small};
		gap: ${theme.spacings.xsmall};

		display: grid;
		grid-template-columns: repeat(2, 1fr);
	`}

	${media.greaterThan('small')`
		grid-template-columns: repeat(3, 1fr);
	`}

	${media.greaterThan('medium')`
		grid-template-columns: repeat(6, 1fr);
	`}
`;
export const Block = styled.div``;

export const Title = styled.h3`
	${({ theme }) => css`
		color: ${darken(0.2, theme.colors.white)};
		font-size: ${theme.font.sizes.small};
		font-weight: ${theme.font.normal};
	`}
`;
export const Description = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.white};
	`}
`;

export const Icon = styled.div`
	${({ theme }) => css`
		margin-right: ${theme.spacings.xxsmall};
	`};
`;
export const IconsWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		color: ${theme.colors.white};
	`};
`;
