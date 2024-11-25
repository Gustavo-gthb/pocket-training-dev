// type Colors = 'Green' | 'Red' | 'Blues' | 'Yellow' | 'Grey';

export interface TrainingSet {
	id: string;
	name: string;
}

export interface Train {
	id: string;
	title: string;
	
	series?: number;
	
	default_reps: number;
	default_weight: number;

	training_set: string;
	exercises: Exercise[];
}

export interface Exercise {
	id: string;

	reps: number;
	weight: number;

	train_id: string;
}

export interface CloudFunctionRequest<T> {
	params: T;
	user: Parse.User | null;
}
