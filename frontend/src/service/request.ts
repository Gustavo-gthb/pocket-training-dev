import axios, { AxiosResponse } from 'axios';
import { translateError } from 'utils/translateError';

const viteBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;

export const parse = axios.create({
	baseURL: viteBaseUrl,
	// disable cors
	timeout: 1000,
	headers: {
		'X-Parse-Application-Id': import.meta.env.VITE_APP_PARSE_APPLICATION_ID,
		'X-Parse-client-key': import.meta.env.VITE_APP_PARSE_CLIENT_KEY,
		'X-Parse-REST-API-Key': import.meta.env.VITE_APP_PARSE_REST_API_KEY
	}
});

interface Results {
	success: boolean;
	message: string;
}

parse.interceptors.response.use(
	(response: AxiosResponse<{ result?: Results }>) => {
		if (response.data.result && !response.data.result.success) {
			const mensagemTraduzida = translateError(response.data.result.message);
			return Promise.reject(new Error(mensagemTraduzida));
		}
		return response;
	},
	() => {
		return Promise.reject(new Error('Erro de rede.'));
	}
);
export default parse;
