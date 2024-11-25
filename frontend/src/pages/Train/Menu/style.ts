import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	background-color: #050416;
	width: 100%;
	height: 80%;
	position: fixed;
	bottom: 0;
	z-index: 99999;

	border-radius: 50px 50px 0 0;
	padding: 30px;
`;
