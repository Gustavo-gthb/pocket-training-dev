import { Container } from './style';

import packageJSON from '../../../package.json';

const VersionShow = () => {
	if (import.meta.env.VITE_APP_ENV === 'dev') {
		return (
			<Container>
				<p>staging - v{packageJSON.version}</p>
			</Container>
		);
	}

	return null;
};

export default VersionShow;
