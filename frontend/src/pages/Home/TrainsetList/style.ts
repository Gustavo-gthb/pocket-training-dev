import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	overflow-y: scroll;
	position: relative;

	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));
	-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));

	border-radius: 12px;

	::-webkit-scrollbar {
		width: 0px;
	}

	::-webkit-scrollbar-track {
		width: 0px;
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		width: 0px;
		background: transparent;
	}

	::-webkit-scrollbar-thumb:hover {
		width: 0px;
		background: transparent;
	}
`;

export const Content = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	flex-direction: column;
	padding-bottom: 200px;
	transition: 0.3s;
`;
