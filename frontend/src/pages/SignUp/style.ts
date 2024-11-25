import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const gap = '1rem';

export const Container = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	gap: 30px;

	form {
		display: flex;
		flex-direction: column;
		gap: ${gap};
	}
`;

export const Input = styled.input<{
	error?: boolean;
}>`
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;

	${({ error }) =>
		error &&
		css`
			border-color: red;
		`}
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
`;

export const StyledError = styled.span<{
	show: string;
}>`
	color: var(--error-highlight);
	transition: 0.2s;
	font-size: small;
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
