import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	z-index: 999999;
	background-color: #ffffff;
	color: black;
	border-radius: 10px;
	width: 85%;
	min-height: 25%;
	height: fit-content;
	max-height: 90%;
	overflow-y: 'scroll';

	top: 50%;
	left: 50%;
	position: fixed;
	transform: translate(-50%, -50%);
`;

export const Backdrop = styled(motion.div)`
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(3px);
	width: 100%;
	height: 100%;

	top: 0;
	left: 0;
	position: fixed;
`;
