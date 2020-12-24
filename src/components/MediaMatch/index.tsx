import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
	greaterThan?: breakpoint;
	lessThan?: breakpoint;
};

const MatchMediaModifier = {
	lessThan: (size: breakpoint) =>
		css`
			${media.lessThan(size)`display: block;`}
		`,
	greaterThan: (size: breakpoint) => css`
		${media.greaterThan(size)`display: block;`}
	`,
};

export default styled.div<MediaMatchProps>`
	${({ lessThan, greaterThan }) => css`
		display: none;
		${!!lessThan && MatchMediaModifier.lessThan(lessThan)}
		${!!greaterThan && MatchMediaModifier.greaterThan(greaterThan)}
	`}
`;
