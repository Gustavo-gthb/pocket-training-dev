import React, { Fragment } from 'react';
import { Backdrop, Container } from './style';
import { AnimatePresence } from 'framer-motion';

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
	React.useEffect(() => {
		if (open) {
			// Ao abrir o modal
			window.history.pushState(null, '', window.location.href);

			window.addEventListener('popstate', function () {
				onClose();
			});
		} else {
			window.removeEventListener('popstate', function () {
				onClose();
			});
		}
	}, [open]);

	return (
		<AnimatePresence>
			{open && (
				<Fragment key='modal-template'>
					<Container
						initial={{
							opacity: 0,
							scale: 0,
							x: '50%',
							y: '50%',
							transform: 'translate(-50%, -30%)'
						}}
						exit={{
							opacity: 0,
							scale: 0,
							x: '50%',
							y: '50%',
							transform: 'translate(-50%, -60%)'
						}}
						animate={{
							opacity: 1,
							scale: 1,
							x: '50%',
							y: '50%',
							transform: 'translate(-50%, -50%)'
						}}>
						{children}
					</Container>

					<Backdrop
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => (onClose ? onClose() : {})}
					/>
				</Fragment>
			)}
		</AnimatePresence>
	);
};

export default Modal;
