import { styleForModalOpen } from 'context/TrainMenu';
import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const OutletContent = styled.div<{
  $openModal: boolean;
}>`
	${({ $openModal }) =>
    $openModal &&
    css`
			${styleForModalOpen}
		`}
`;
