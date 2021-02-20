import styled from 'styled-components';

import { Wrapper as CartWrapperStyles } from 'components/CartList/styles';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	${CartWrapperStyles} {
		${media.greaterThan('medium')`
			min-width: 40rem;
	`}
	}
`;
