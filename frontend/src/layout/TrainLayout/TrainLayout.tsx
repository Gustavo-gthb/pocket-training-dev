import { Outlet } from 'react-router-dom';

import { TrainMenu } from 'pages/Train';
import { useTrainMenu } from 'context/TrainMenu';

import { Container, OutletContent } from './style';

const TrainLayout = () => {
	const { modal } = useTrainMenu();

	return (
		<Container>
			<TrainMenu />

			<OutletContent $openModal={modal.is}>
				<Outlet />
			</OutletContent>
		</Container>
	);
};

export default TrainLayout;
