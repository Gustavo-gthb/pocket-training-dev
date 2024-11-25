import { Container, Content } from './style';

import Welcome from './Welcome';
import PayModal from './PayModal';
import NewTrainset from './NewTrainset';
import TrainsetList from './TrainsetList';

const Home = () => {
	return (
		<Container>
			<Content>
				<PayModal />
				<Welcome />
				<h1>Treinos</h1>
				<TrainsetList />
				<NewTrainset />
			</Content>
		</Container>
	);
};

export default Home;
