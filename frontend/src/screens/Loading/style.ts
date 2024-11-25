import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainText = styled.p`
	opacity: 0;
	margin-top: 24px;
	font-size: 1.1rem;
	font-weight: bold;
	color: grey;
	animation: ${fadeIn} 0.4s 0.2s ease forwards;
`;

export const Sub = styled.div`
	position: absolute;
	bottom: 20px;
`;

export const Content = styled(motion.div)`
	width: 100%;
	display: flex;
	align-items: center;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;

	p {
		opacity: 0;
		margin-top: 24px;
		font-size: 1.1rem;
		font-weight: bold;
		color: grey;
	}
`;

export const General = styled.div<{
	exit: 'true' | 'false';
}>`
	transform-origin: center center;

	height: 100%;
	width: 100%;
	padding: 0 50px;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${({ exit }) => exit === 'true' && 'overflow: hidden;'}
`;

export const Container = styled(motion.div)`
	gap: 20px;
	display: flex;
	flex-direction: column;
	transform-origin: center center;
`;
