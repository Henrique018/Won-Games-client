import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as LogoStyles from 'components/Logo/styles';
import * as HeadingStyles from 'components/Heading/styles';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	height: 100vh;

	${media.greaterThan('medium')`
		grid-template-columns: 1fr 1fr;
	`}
`;

export const BannerBlock = styled.div`
	${({ theme }) => css`
		background: url(img/auth-bg.jpg) no-repeat center center;
		background-size: cover;
		position: relative;
		padding: ${theme.spacings.xlarge} ${theme.spacings.xlarge};

		${media.lessThan('medium')`
			display: none;
		`}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: ${theme.colors.black};
			opacity: 0.85;
		}
	`}
`;

export const BannerContent = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.white};
		z-index: ${theme.layers.base};
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	`}

	> a {
		width: fit-content;
		height: fit-content;
	}
`;

export const Subtitle = styled.h3`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xxlarge};
		font-weight: ${theme.font.light};
		margin-top: ${theme.spacings.xxsmall};
		strong {
			color: ${theme.colors.primary};
		}
	`}
`;

export const Footer = styled.p`
	justify-self: flex-end;
	text-align: center;
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: ${theme.colors.white};
	`}
`;

export const ContentWrapper = styled.div`
	${({ theme }) => css`
		max-width: 38rem;
		${LogoStyles.Wrapper} {
			margin: 0 auto ${theme.spacings.xxlarge};
		}
		${HeadingStyles.Wrapper} {
			margin-bottom: ${theme.spacings.medium};
		}
	`}
`;
