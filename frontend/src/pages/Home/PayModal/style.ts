import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const CheckoutButton = styled.div`
	button {
		width: 100%;
		height: 45px;
		border-radius: 10px;
		color: var(--backgound);
		padding: 10px 15px;
		font-size: 1.2rem;
		border: none;
		font-weight: bold;
		cursor: pointer;
		background: var(--subtitle-text);
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;

	h1 {
	}
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		color: var(--subtitle-text);
		font-size: 3rem;
		font-weight: 700;

		display: flex;
		flex-direction: row;
		align-items: baseline;

		span {
			font-size: 1.2rem;
			font-weight: 400;
		}
	}
`;
