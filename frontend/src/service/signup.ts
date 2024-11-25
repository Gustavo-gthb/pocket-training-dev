import { parse } from './request';

type ISignUp = {
	name: string;
	password: string;
	email: string;
};

interface ISignUpResponse {
	result: {
		success: boolean;
		message: string;
	};
}

export const signUp = async ({ name, password, email }: ISignUp) => {
	const response = await parse.post('/functions/signup/', {
		username: name,
		password,
		email,
	});

	return {
		response,
		data: response.data as ISignUpResponse,
	};
};
