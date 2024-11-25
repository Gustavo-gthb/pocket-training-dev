import { Container } from './style';

import ExerciseList from './ExerciseList';
import { useTrainMenu } from 'context/TrainMenu';
import { createPortal } from 'react-dom';
import LineModal from './ExerciseList/SettingButton/LineModal/LineModal';

const Menu = () => {
	const { actualType } = useTrainMenu();

	return (
		<>
			{actualType === 'exercise' && <LineModal />}

			<Container
				initial={{ height: 0 }}
				animate={{ height: actualType === 'train' ? '80%' : '22.5%' }}
				exit={{ height: '0' }}>
				<ExerciseList />
			</Container>
		</>
	);
};

const portalElement = document.getElementById('train_menu-portal') as HTMLElement;
const PortalMenu = () => {
	if (!portalElement) return null;

	return createPortal(<Menu />, portalElement, 'train_menu-portal');
};

export default PortalMenu;
