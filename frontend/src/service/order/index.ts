import { parse } from '../request';
import { NewOrderResponse } from './type';

export const newOrder = async (customer_id: string, token: string) => {
	const response = await parse.post(
		'/functions/new_payment_order/',
		{
			customer_id: customer_id
		},
		{
			headers: {
				'X-Parse-Session-Token': token
			}
		}
	);

	return {
		data: response.data.result as NewOrderResponse,
		response: response
	};
};
