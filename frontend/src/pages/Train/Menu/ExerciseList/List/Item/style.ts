import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fda743;
	border-radius: 10px;
	padding: 10px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	font-size: 1.2rem;
	font-family: Inter;

	h3 {
		color: #000;
		font-family: Inter;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;

		max-width: 140px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: capitalize;
	}
`;
export const Series = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
