import { LoginReturn } from '../../../types/login';
import { parse } from './request';

export const login = async (username: string, password: string) => {
	const response = await parse.post('/functions/login/', {
		username,
		password
	});

	return {
		data: response.data as LoginReturn,
		response: response
	};
};
