import { motion } from 'framer-motion';
import styled from 'styled-components';

const gap = '1rem';

export const Container = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	gap: 30px;

	input {
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: ${gap};
	}
`;

export const StyledError = styled.span<{
	show: string;
}>`
	transition: 0.2s;
	visibility: ${(props) => (props.show === 'true' ? 'visible' : 'hidden')};
	height: ${(props) => (props.show === 'true' ? 'auto' : '0px')};
	opacity: ${(props) => (props.show === 'true' ? '1' : '0')};
	margin-top: ${(props) => (props.show === 'true' ? '-12px' : '-' + gap)};
`;

export const SubmitButton = styled(motion.button)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;

	&:disabled {
		opacity: 1;
		cursor: not-allowed;
		color: #000;
		background-color: #ccc;
	}

	position: relative;
`;

export const LoadingContainer = styled.div<{
	open: 'open' | 'close';
}>`
	transition: 0.2s;
	visibility: ${(props) => (props.open === 'open' ? 'visible' : 'hidden')};
	opacity: ${(props) => (props.open === 'open' ? '1' : '0')};

	position: absolute;
	left: 0;
	width: 30px;
`;
