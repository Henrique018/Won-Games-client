import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
	${({ theme }) => css`
		${media.lessThan('huge')`
      overflow-x: hidden;
    `}
		.slick-track,
    .slick-list {
			display: flex;
		}
		.slick-slide > div {
			margin: 0 ${theme.spacings.xxsmall};
			flex: 1 0 auto;
			height: 100%;
			cursor: pointer;
		}
		.slick-list {
			margin: 0 -${theme.spacings.xxsmall};
		}
		${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
		.slick-prev,
    .slick-next {
			display: block;
			color: ${theme.colors.white};
			cursor: pointer;
			position: absolute;
			top: 50%;
			width: 2.5rem;
			height: 2.5rem;
			padding: 0;
			transform: translate(0, -50%);
		}
		.slick-prev {
			left: -${theme.spacings.xxlarge};
		}
		.slick-next {
			right: -${theme.spacings.xxlarge};
		}
		.slick-prev.slick-disabled,
		.slick-next.slick-disabled {
			visibility: hidden;
		}
	`}
`;

export type ModalProps = {
	isOpen: boolean;
};

export const Modal = styled.div<ModalProps>`
	${({ theme, isOpen }) => css`
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: ${theme.layers.modal};

		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.7);
		transition: opacity ${theme.transition.default};

		opacity: ${isOpen ? 1 : 0};
		pointer-events: ${isOpen ? 'all' : 'none'};
	`}
`;

export const Close = styled.div`
	${({ theme }) => css`
		position: absolute;
		top: 0;
		left: 0;
		text-align: right;
		width: 100%;
		height: 100%;
		color: ${theme.colors.white};
		cursor: pointer;
	`}
`;

export const Content = styled.div`
	max-width: min(100rem, 100%);
	max-height: 80rem;
`;
