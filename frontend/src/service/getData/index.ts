import { parse } from '../request';
import { GetDataAPIResponse } from './type';

interface Props {
  token: string;
}

export const getData = async ({ token }: Props) => {
	const response = await parse.post('/functions/get_training_data/', {}, {
    headers: {
      'X-Parse-Session-Token': token,
    }
  });

	return {
		data: response.data as GetDataAPIResponse,
		response: response
	};
};
