import styled from 'styled-components';

export const Container = styled.form`
	font-family: 'Inter', sans-serif;
	font-weight: 800;
	padding: 8% 10%;
	box-sizing: border-box;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 40px;

	h2 {
		color: #000;
		font-size: 22px;
		font-style: normal;
		line-height: normal;
		margin-right: 4%;
		margin-left: 0;
	}
`;

export const Header = styled.div`
	display: flex;
	position: relative;

	h2 {
		color: #000;
		font-size: 22px;
		font-style: normal;
		line-height: normal;
		font-weight: 800;
		margin-right: 4%;
		margin-left: 0;
	}

	p {
		font-size: 15px;
		font-style: normal;
		line-height: 20px;
		margin-bottom: 0;
	}
`;

export const Circle = styled.div`
	border: 2px solid #6b6b6b;
	border-radius: 50%;
	width: 26px;
	height: 26px;
	right: 10px;
	border-radius: 50%;

	position: absolute;
`;

export const Main = styled.div`
	bottom: 10%;
	display: flex;
	flex-direction: column;
	gap: 16px;

	p {
		font-size: 15px;
		font-style: normal;
		line-height: normal;
		margin-bottom: 2%;
		font-weight: 700;
	}

	input {
		padding: 0 10px;
		height: 30px;
		width: 100%;
		border-radius: 6px;
		font-size: 1rem;
		flex-shrink: 0;
		background: #d9d9d9;
		border: none;
	}
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-between;

	p {
		font-size: 15px;
		font-style: normal;
		line-height: 10px;
		margin-bottom: 2%;
		font-weight: 700;
	}
`;

export const Square3 = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 3%;

	.orange-color {
		border: 1px solid #ef9645;
		border-radius: 5px;
		background-color: #ef9645;
		width: 30px;
		height: 30px;
	}

	.dark-grey-color {
		border: 1px solid #4657ee;
		border-radius: 5px;
		background-color: #4657ee;
		width: 30px;
		height: 30px;
	}

	.pink-color {
		border: 1px solid #fa5aba;
		border-radius: 5px;
		background-color: #fa5aba;
		width: 30px;
		height: 30px;
	}
`;

export const Square2 = styled.div`
	display: flex;
	gap: 10px;

	.yellow-color {
		border: 1px solid #ffe600;
		border-radius: 5px;
		background-color: #ffe600;
		width: 30px;
		height: 30px;
	}

	.wine-color {
		border: 1px solid #81002e;
		border-radius: 5px;
		background-color: #81002e;
		width: 30px;
		height: 30px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	button {
		bottom: 10px;
		width: 50%;
		padding: 10px 15px;
		border-radius: 20px;
		border: none;
		font-size: 1rem;
		font-weight: bold;
		background-color: #ef9645;
		color: #fff;
	}
`;

export const Row = styled.div``;

export const Section = styled.div``;
