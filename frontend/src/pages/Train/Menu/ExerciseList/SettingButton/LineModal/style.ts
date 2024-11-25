import { IType } from 'context/TrainMenu';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const LineModalBackdrop = styled.div`
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 80%;
	position: fixed;
	background-color: transparent;
`;

type VariantStyles = {
	[key in IType]: ReturnType<typeof css>;
};

const variantStyles: VariantStyles = {
	train: css`
		background-color: #fff;
	`,

	exercise: css`
		background-color: #fda743;
	`
};

export const LineModalContainer = styled(motion.div)<{
	variant: IType;
}>`
	top: 0;
	left: 50%;
	width: 90%;
	height: 40%;
	padding: 20px;
	position: fixed;
	z-index: 100000;
	overflow-y: scroll;
	border-radius: 30px;
	background-color: #fff;

	&::-webkit-scrollbar {
		width: 0;
	}

	${({ variant }) => variantStyles[variant]}
`;
