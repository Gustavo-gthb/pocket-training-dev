import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerButton = styled(motion.button)`
	cursor: pointer;
	border: none;
	user-select: none;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 20px;

	transition: filter 0.3s;

	&:disabled {
		filter: brightness(0.8);
		cursor: not-allowed;
	}
`;
