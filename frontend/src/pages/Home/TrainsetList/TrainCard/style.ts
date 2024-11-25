import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	width: 100%;
	position: relative;
	overflow: hidden;
	height: 100%;

	gap: 10px;
	display: flex;
	flex-direction: column;
`;

export const Content = styled(motion.div)`
	width: 100%;
	border-radius: 12px;
	background: var(--home-cards-background);
	color: var(--home-cards-text);

	cursor: pointer;
	user-select: none;

	padding: 15px 15px;

	gap: 10px;
	display: grid;
	align-items: center;
	justify-content: space-between;
	grid-template-columns: 1fr 1fr 1fr;

	h1,
	h2,
	p {
		color: var(--home-cards-texts);
		font-size: 1rem;
		text-align: center;
		font-family: Inter;
		font-style: normal;
		line-height: normal;
	}

	h1 {
		text-transform: capitalize;
		font-weight: normal;
	}
`;

export const DeleteIcon = styled.div`
	background: #de3939;
	color: white;
	border-radius: 5px;
	color: #fff;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 60px;
	height: 50px;
`;

export const DeleteContainer = styled(motion.div)<{
	isLoading: boolean;
}>`
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	z-index: -1;
	background-color: #fa6969;
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: end;
	padding: 0 20px;
	border-radius: 12px;

	.animation {
		transform: scale(0.5);
		position: absolute;
		right: -50px;
		z-index: 11111;
	}

	&::after {
		position: absolute;
		content: '';
		left: -20px;
		z-index: 3;
		top: 0;
		height: 120%;
		width: 100px;
		background: var(--delete-gradient);
	}
`;

export const CircleContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

export const Circle = styled.div`
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: var(--home-cards-text);
`;
export const InfoContent = styled.div``;
export const Reps = styled.h2`
	font-weight: normal;
`;
