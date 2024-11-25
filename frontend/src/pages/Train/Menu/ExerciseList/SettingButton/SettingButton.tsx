import { useTransition } from 'react';
import { AddContainer, Container, DoneContainer, FailContainer } from './style';

import { AddIcon, DoneIcon, FailIcon } from './svg';
import { useTrainMenu } from 'context/TrainMenu';
import LineModal from './LineModal/LineModal';

const AddButton = () => {
	const { setModal, modal, actualType } = useTrainMenu();
	const [_, startTransition] = useTransition();

	const handleClick = () => {
		if (modal.is) {
			setModal((old) => ({ ...old, is: true, submit: true }));

			startTransition(() => {
				setModal((old) => ({ ...old, submit: false }));
			});
		} else {
			setModal((old) => ({ ...old, is: true, type: 'exercise' }));
		}
	};

	return (
		<>
			<AddContainer whileTap={{ scale: 0.8, rotate: -90 }}>
				<AddIcon onClick={() => handleClick()} />
			</AddContainer>

			{actualType === 'train' && <LineModal />}
		</>
	);
};

const FailButton = () => {
	return (
		<FailContainer whileTap={{ scale: 0.8 }}>
			<FailIcon />
			<p>não deu</p>
		</FailContainer>
	);
};

const DoneButton = () => {
	return (
		<DoneContainer whileTap={{ scale: 0.8 }}>
			<DoneIcon />
			<p>treino feito</p>
		</DoneContainer>
	);
};

const SettingButton = () => {
	const { modal } = useTrainMenu();

	return (
		<Container open={modal.is}>
			<FailButton />

			<div className='addbuttons'>
				<AddButton />
			</div>

			<DoneButton />
		</Container>
	);
};

export default SettingButton;
