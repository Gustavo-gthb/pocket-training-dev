import { pagarmeAPI } from '..';
import { Subscriptions } from './types';

interface Props {
	data: Subscriptions;
}

export const pagarmeSubscription = async ({ data }: Props) => {
	const response = await pagarmeAPI.post('/subscriptions', data);
	return response.data;
};
