import styled from 'styled-components';

export const Container = styled.div``;

export const WelcomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const WelcomeMessage = styled.h1`
	font-size: 1.2rem;

	span {
		text-transform: capitalize;
	}
`;

export const SubText = styled.p`
	font-size: 0.9rem;
	margin-top: -5px;
	color: var(--subtitle-text);
`;
