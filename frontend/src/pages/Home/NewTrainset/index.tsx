import React from 'react';
import { NewTrainSetButtonContainer } from './style';
import ModalCreateTrainSet from './Modal/Modal';

import { Button, Modal } from 'components';

const WeightIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='36'
		height='22'
		viewBox='0 0 36 22'
		fill='none'>
		<path
			d='M26.1263 0C23.4071 0 20.1631 1.03362 20.1631 5.96319V15.5043C20.1631 20.4339 23.4071 21.4675 26.1263 21.4675C28.8455 21.4675 32.0895 20.4339 32.0895 15.5043V5.96319C32.0895 1.03362 28.8455 0 26.1263 0Z'
			fill='#050416'
		/>
		<path
			d='M9.65289 0C6.93367 0 3.6897 1.03362 3.6897 5.96319V15.5043C3.6897 20.4339 6.93367 21.4675 9.65289 21.4675C12.3721 21.4675 15.6161 20.4339 15.6161 15.5043V5.96319C15.6161 1.03362 12.3721 0 9.65289 0Z'
			fill='#050416'
		/>
		<path
			d='M20.1641 9.54111H15.6162V11.9264H20.1641V9.54111Z'
			fill='#050416'
		/>
		<path
			d='M34.5864 15.9018C33.9345 15.9018 33.3938 15.3612 33.3938 14.7092V6.75828C33.3938 6.10631 33.9345 5.56564 34.5864 5.56564C35.2384 5.56564 35.7791 6.10631 35.7791 6.75828V14.7092C35.7791 15.3612 35.2384 15.9018 34.5864 15.9018Z'
			fill='#050416'
		/>
		<path
			d='M1.19264 15.9018C0.540663 15.9018 0 15.3612 0 14.7092V6.75828C0 6.10631 0.540663 5.56564 1.19264 5.56564C1.84461 5.56564 2.38528 6.10631 2.38528 6.75828V14.7092C2.38528 15.3612 1.84461 15.9018 1.19264 15.9018Z'
			fill='#050416'
		/>
	</svg>
);

const NewTrainset = () => {
	const [openModal, setOpenModal] = React.useState(false);

	const handleClick = () => {
		setOpenModal(true);
	};

	return (
		<>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)}>
				<ModalCreateTrainSet onClose={() => setOpenModal(false)} />
			</Modal>

			<NewTrainSetButtonContainer>
				<Button onClick={handleClick}>
					Novo treino <WeightIcon />
				</Button>
			</NewTrainSetButtonContainer>
		</>
	);
};

export default NewTrainset;
