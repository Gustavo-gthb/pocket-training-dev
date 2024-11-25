import React from 'react';
import { useTrainMenu } from 'context/TrainMenu';
import { AnimatePresence } from 'framer-motion';
import { LineModalBackdrop, LineModalContainer } from './style';

import Train from './Exercise';
import Exercise from './Series';
import { useBackButton } from 'hooks/keys/useBackButton';
import { useScapeKey } from 'hooks/keys/useEscapeKey';

const contentObj = {
	train: <Train />,
	exercise: <Exercise />
};

type key = keyof typeof contentObj;

const LineModal = () => {
	const modalRef = React.useRef<HTMLDivElement>(null);
	const { modal, setModal, actualType } = useTrainMenu();

	const handleClose = () => {
		setModal((old) => ({ ...old, is: false }));
	};

	const choseContent = React.useMemo(() => {
		return contentObj[actualType as key];
	}, [modal.type]);

	useBackButton(() => {
		if (modal.is) {
			handleClose();
		}
	}, [modal.is]);

	useScapeKey(() => {
		if (modal.is) {
			handleClose();
		}
	}, [modal.is]);

	React.useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (modal.is && !modalRef.current?.contains(e.target as Node)) {
				handleClose();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<AnimatePresence>
			{modal?.is && (
				<>
					<LineModalContainer
						ref={modalRef}
						variant={actualType}
						transition={{ duration: 0.2 }}
						exit={{ opacity: 0, y: '100%', x: '-50%', transition: { duration: 0.1 } }}
						initial={{ opacity: 0, y: '100%', x: '-50%' }}
						animate={{ opacity: 1, y: '90%', x: '-50%' }}>
						{choseContent}
					</LineModalContainer>

					<LineModalBackdrop onClick={handleClose} />
				</>
			)}
		</AnimatePresence>
	);
};

export default LineModal;
