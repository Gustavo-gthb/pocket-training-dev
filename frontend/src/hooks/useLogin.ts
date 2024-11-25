import React from 'react';
import { LoginReturn } from '../../../types/login';
import { useUser } from 'context/User';
import { useNavigate } from 'react-router-dom';
import { useTrain } from 'context/Train';
import { useTrainSets } from 'context/TrainSet';
import { getData } from 'service/getData';

export default function useLogin() {
	const navigate = useNavigate();

	const { setTrains } = useTrain();
	const { setTrainSets } = useTrainSets();
	const { saveToken, setUser } = useUser();

	const handleLogin = React.useCallback(async (user: LoginReturn) => {
		saveToken(user);
		setUser({
			result: user.result
		});

		const response = await getData({ token: user.result.sessionToken });
		if (response.data.result.success) {
			setTrains(response.data.result.data.trains);
			setTrainSets(response.data.result.data.trainingSets);

			setUser(user);
			navigate('/home', { state: { user } });
		} else {
			window.localStorage.clear();
			window.location.reload();
			navigate('/login');
		}
	}, []);

	return { handleLogin };
}
