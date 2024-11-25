import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	width: 100%;
	height: 100;
	gap: 20px;
`;

export const ButtonNeg = styled(motion.div)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 20px;
	min-height: 18.625px;
	flex-shrink: 0;
	border-radius: 3.919px;
	background: #d9d9d9;
`;

export const Square = styled.input`
	display: flex;
	text-align: center;
	min-width: 40px;
	min-height: 37px;
	flex-shrink: 0;
	border-radius: 8.551px;
	background: #d9d9d9;
`;

export const ButtonPos = styled(motion.div)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 20px;
	min-height: 18.625px;
	flex-shrink: 0;
	border-radius: 3.919px;
	background: #d9d9d9;
`;
