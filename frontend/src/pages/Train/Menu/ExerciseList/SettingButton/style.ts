import { styleForModalOpen } from 'context/TrainMenu';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div<{
	open: boolean;
}>`
	gap: 10px;
	display: grid;
	align-items: baseline;
	justify-content: space-between;
	grid-template-columns: 1fr 1fr 1fr;
	z-index: 99999;

	left: 0;
	bottom: 0;
	width: 100%;

	padding: 0 15px 20px 15px;

	position: absolute;

	p {
		font-size: 0.7rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	svg {
		cursor: pointer;
		--highlight-color: null;
	}

	${({ open }) =>
		open &&
		css`
			& > *:not(.addbuttons) {
				${styleForModalOpen}
			}
		`}
`;

const baseStyleForButtonContainer = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;

	@media (max-width: 320px) {
		svg {
			width: 30px;
			height: 30px;
		}
	}
`;

export const FailContainer = styled(motion.div)`
	${baseStyleForButtonContainer}
	p {
		color: #ba6e76;
	}
`;

export const AddContainer = styled(motion.div)`
	width: 100%;
	z-index: 9999999;
	${baseStyleForButtonContainer}
	
	svg {
		z-index: 9999999;
	}

	@media (max-width: 320px) {
		svg {
			width: 55px;
			height: 55px;
		}
	}
`;

export const DoneContainer = styled(motion.div)`
	${baseStyleForButtonContainer}

	p {
		color: #ef9645;
	}
`;

