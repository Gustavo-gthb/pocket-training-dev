import { useTrain } from 'context/Train';
import { useTrainSets } from 'context/TrainSet';
import { useUser } from 'context/User';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from 'service/getData';
import { consultToken } from 'utils';

export default function useRevalidate() {
  const navigate = useNavigate();

  const { setTrains } = useTrain();
	const { setTrainSets } = useTrainSets();
	const { setUser } = useUser();

	const handleRevalidate = React.useCallback(async () => {
		const token = consultToken();

    function handleError(){
      window.localStorage.clear();
      navigate('/login');
    }

		if (token) {
			try {
				const user = JSON.parse(window.localStorage.getItem('user') || '{}');

				const response = await getData({ token: user.result.sessionToken });
				if (response.data.result.success) {
					setTrains(response.data.result.data.trains);
					setTrainSets(response.data.result.data.trainingSets);

					setUser(user);
					navigate('/home', { state: { user } });
				} 
			} catch (error) {
        handleError();
			}
		} else {
      handleError();
		}
	}, []);

	return { handleRevalidate };
}
