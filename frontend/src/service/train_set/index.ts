import parse from 'service/request';
import { TrainingSet } from '../../../../types';

type Add = {
	name: string;
	token: string;
};
export const add_training_set = async ({ name, token }: Add) => {
	const response = await parse.post(
		'/functions/add_training_set/',
		{
			name
		},
		{
			headers: {
				'X-Parse-Session-Token': token
			}
		}
	);

	return {
		data: response.data.result as TrainingSet,
		response: response
	};
};

type Remove = {
	id: string;
	token: string;
};
export const remove_training_set = async ({ id, token }: Remove) => {
	const response = await parse.post(
		'/functions/delete_training_set/',
		{
			id
		},
		{
			headers: {
				'X-Parse-Session-Token': token
			}
		}
	);

	return {
		data: response.data as TrainingSet,
		response: response
	};
};

export const get_trainingSets = async () => {
	const response = await parse.post('/functions/get_training_sets/');

	return {
		data: response.data as TrainingSet[],
		response: response
	};
};

export const update_trainingSet = async (id: string, name: string) => {
	const response = await parse.post('/functions/update_training_set/', {
		id,
		name
	});

	return {
		data: response.data as TrainingSet,
		response: response
	};
};
