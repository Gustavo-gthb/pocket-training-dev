import { IChildren } from 'types/children';

import { TrainingSet } from '../../../types/index';

import useLocalStorage from 'use-local-storage';
import { createContext, useContextSelector } from 'use-context-selector';
import { ISetState, LocalStorageSetter } from 'types/state';
import { toast } from 'react-toastify';
import { remove_training_set } from 'service/train_set';
import { useUser } from './User';
import React from 'react';

interface TrainContextProps {
	trainSets: TrainingSet[];
	setTrainSets: LocalStorageSetter<TrainingSet[]>;
	getTrainSetById: (id: string | undefined) => TrainingSet | undefined;
	deleteTrainSetById: (id: string | undefined) => void;
	loading: boolean;
	setLoading: ISetState<boolean>;
}

export const TrainSetContext = createContext({} as TrainContextProps);

export const TrainSetProvider = ({ children }: IChildren) => {
	const { user } = useUser();
	const [trainSets, setTrainSets] = useLocalStorage<TrainingSet[]>('trainSets', [] as TrainingSet[]);
	const [loading, setLoading] = React.useState(true);

	const getTrainSetById = (id: string | undefined) => {
		if (!id) return undefined;
		return trainSets.find((trainSet) => trainSet.id === id);
	};

	const deleteTrainSetById = async (id: string | undefined) => {
		try {
			setLoading(true);
			if (!id) return undefined;

			const response = await remove_training_set({ id, token: user.result.sessionToken });
			console.log(response);
			const newTrainSets = trainSets.filter((trainSet) => trainSet.id !== id);
			setTrainSets(newTrainSets);
			
			toast.success('Treino deletado com sucesso');
		} catch (e) {
			if (e instanceof Error) {
				toast.error(e.message);
			}
		} finally {
			setLoading(false);
		}
	};

	const value = {
		trainSets,
		setTrainSets,
		getTrainSetById,
		deleteTrainSetById,
		setLoading,
		loading
	};

	return <TrainSetContext.Provider value={value}>{children}</TrainSetContext.Provider>;
};

export const useTrainSets = () => {
	const trainSets = useContextSelector(TrainSetContext, (state) => state.trainSets);
	const setTrainSets = useContextSelector(TrainSetContext, (state) => state.setTrainSets);
	const getTrainSetById = useContextSelector(TrainSetContext, (state) => state.getTrainSetById);
	const deleteTrainSetById = useContextSelector(TrainSetContext, (state) => state.deleteTrainSetById);
	const setLoading = useContextSelector(TrainSetContext, (state) => state.setLoading);
	const loading = useContextSelector(TrainSetContext, (state) => state.loading);

	return {
		trainSets,
		setTrainSets,
		getTrainSetById,
		deleteTrainSetById,
		setLoading,
		loading
	};
};
