import { Train, TrainingSet } from '../../../../types';
export interface GetDataAPIResponse {
	result: Result;
}

export interface Result {
	success: boolean;
	data: Data;
}

export interface Data {
	trainingSets: TrainingSet[];
	trains: Train[];
}
