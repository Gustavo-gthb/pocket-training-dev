import { Container, Content } from './style';

import SettingButton from './SettingButton';
import { useTrainMenu } from 'context/TrainMenu';
import List from './List';

const ExerciseList = () => {
	const { modal, actualType } = useTrainMenu();

	return (
		<Container exit={{ opacity: 0 }}>
			{actualType === 'train' && (
				<Content $openmodal={modal.is}>
					<List />
				</Content>
			)}

			<SettingButton />
		</Container>
	);
};

export default ExerciseList;
