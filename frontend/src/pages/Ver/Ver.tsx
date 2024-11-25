import { Container } from './style';

import packageJSON from '../../../package.json';

const Ver = () => {
	return (
		<Container>
			<p>{packageJSON.version}</p>
		</Container>
	);
};

export default Ver;
