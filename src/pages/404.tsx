import Base from 'templates/Base';

import Empty from 'components/Empty';
import { Container } from 'components/Container';

export default function Page404() {
	return (
		<Base>
			<Container>
				<Empty
					title="404 Not Found"
					description="Ops! this page doesn't exist. Go back to the store and explore fun games"
					hasLink
				/>
			</Container>
		</Base>
	);
}
