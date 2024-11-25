import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div<{
	$isOpen: boolean;
}>`
	position: relative;
	width: 100%;
	transition: 0.2s;

	${({ $isOpen }) =>
		$isOpen &&
		css`
			input {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				border: 1px solid #ccc;
			}
		`}

	input {
		text-transform: capitalize;
		width: 100%;
		padding: 10px;

		&::placeholder {
			text-transform: none;
		}
	}
`;

export const SuggestionsContainer = styled(motion.div)`
	position: absolute;
	background-color: white;
	padding: 10px;
	border-radius: 0 0 10px 10px;
	width: 100%;
	max-height: 200px;
	overflow-y: auto;
	border: 1px solid #ccc;
`;

export const SuggestionsContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	button {
		text-transform: capitalize;
		text-align: left;
		padding: 10px;
		border: none;
		border-radius: 5px;
	}
`;
