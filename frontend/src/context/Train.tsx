import { IChildren } from 'types/children';

import { Exercise, Train } from '../../../types/index';
import useLocalStorage from 'use-local-storage';

import { createContext, useContextSelector } from 'use-context-selector';

interface TrainContextProps {
	trains: Train[];
	setTrains: (old: Train[]) => void;

	getTrainsByTrainSetId: (trainSetId: string) => Train[];
	getSingleTrainById: (trainId: string | undefined) => Train | undefined;
	addExerciseToTrain: (trainId: string, exercise: Exercise) => void;
}

export const TrainContext = createContext({} as TrainContextProps);

export const TrainProvider = ({ children }: IChildren) => {
	const [trains, setTrains] = useLocalStorage('trains', [] as Train[]);

	const getTrainsByTrainSetId = (trainSetId: string) => {
		return trains.filter((train) => train.training_set === trainSetId);
	};

	const getSingleTrainById = (trainId: string | undefined) => {
		if (!trainId) {
			return {} as Train;
		} else {
			return trains.find((train) => train.id === trainId);
		}
	};

	const addExerciseToTrain = (trainId: string, exercise: Exercise) => {
		const newTrains = trains.map((train) => {
			if (train.id === trainId) {
				return {
					...train,
					exercises: [...(train.exercises || []), exercise]
				};
			}

			return train;
		});

		setTrains(newTrains);
	};

	const value = {
		trains,
		setTrains,
		getTrainsByTrainSetId,
		addExerciseToTrain,
		getSingleTrainById
	};

	return <TrainContext.Provider value={value}>{children}</TrainContext.Provider>;
};

export const useTrain = () => {
	const trains = useContextSelector(TrainContext, (state) => state.trains);
	const setTrains = useContextSelector(TrainContext, (state) => state.setTrains);
	const getTrainsByTrainSetId = useContextSelector(TrainContext, (state) => state.getTrainsByTrainSetId);
	const addExerciseToTrain = useContextSelector(TrainContext, (state) => state.addExerciseToTrain);
	const getSingleTrainById = useContextSelector(TrainContext, (state) => state.getSingleTrainById);

	return {
		trains,
		setTrains,
		getTrainsByTrainSetId,
		addExerciseToTrain,
		getSingleTrainById
	};
};
