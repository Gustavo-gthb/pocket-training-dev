import { styleForModalOpen } from 'context/TrainMenu';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)``;
export const Content = styled.div <{
  $openmodal: boolean;
}>`
	${({ $openmodal }) =>
    $openmodal &&
    css`
			${styleForModalOpen}
		`}
`;
