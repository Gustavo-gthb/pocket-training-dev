import { AnimatePresence } from 'framer-motion';
import { Backdrop, CloseButtonContainer, Container } from './style';

const CloseButton = ({ ...rest }) => (
	<svg
		{...rest}
		xmlns='http://www.w3.org/2000/svg'
		width='12'
		height='12'
		viewBox='0 0 12 12'
		fill='none'>
		<path
			d='M1 1L11 11M1 11L11 1'
			stroke='black'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

interface Props {
	open: boolean;
	onClose: () => void;
	fullScreen?: boolean;
	children: React.ReactNode;
}

const ModalBottom = ({ open, onClose, children, fullScreen }: Props) => {
	return (
		<AnimatePresence>
			{open && (
				<>
					<Container
						animate={{ y: 0 }}
						exit={{ y: '100%' }}
						fullScreen={fullScreen}
						initial={{ y: '100%' }}
						transition={{ ease: 'anticipate' }}>
						<CloseButtonContainer>
							<CloseButton onClick={onClose} />
						</CloseButtonContainer>
						{children}
					</Container>
					<Backdrop />
				</>
			)}
		</AnimatePresence>
	);
};

export default ModalBottom;
