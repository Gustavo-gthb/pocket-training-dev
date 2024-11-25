import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const INDEX = 99999;

export const Container = styled(motion.div)<{
	fullScreen?: boolean;
}>`
	position: fixed;
	background-color: var(--backgound);
	width: 100%;
	height: calc(330px + 45px);

	transition: height 0.3s ease;

	bottom: 0;
	left: 0;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding: 45px 20px;
	z-index: ${INDEX};

	${({ fullScreen }) =>
		fullScreen &&
		css`
			height: 100%;
			padding: 20px;
		`}
`;

export const CloseButtonContainer = styled.div`
	position: absolute;
	right: 25px;
	top: 25px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 999999;

	svg {
		path {
			stroke: var(--text);
		}
		width: 15px;
		height: 15px;
		opacity: 0.6;
	}
`;

export const Backdrop = styled.div`
	background-color: var(--modal_background);
	backdrop-filter: blur(2px);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: ${INDEX - 1};
`;
