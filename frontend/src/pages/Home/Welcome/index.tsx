import { SubText, WelcomeContainer, WelcomeMessage } from './style';
import { useUser } from 'context/User';

const Welcome = () => {
	const { user } = useUser();

	return (
		<WelcomeContainer>
			<WelcomeMessage>
				Seja bem vindo <span>{user?.result?.username || ''}</span>
			</WelcomeMessage>
			<SubText>O que vamos treinar hoje?</SubText>
		</WelcomeContainer>
	);
};

export default Welcome;
