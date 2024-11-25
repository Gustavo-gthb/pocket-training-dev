import React from 'react';
import { IChildren } from 'types/children';
import { ISetState } from 'types/state';
import { createContext, useContextSelector } from 'use-context-selector';

const INITIAL_LOADING_TIME = 2500;

interface ILoading {
	aux: boolean;
	main: boolean;
	message: string | undefined;
}

interface LoadingContextProps {
	loading: ILoading;
	setLoading: ISetState<ILoading>;

	handleLoading: () => void;
	handleMessage: (message: string) => void;
	handleStopLoading: () => void;
}

export const LoadingContext = createContext({} as LoadingContextProps);

export const LoadingProvider = ({ children }: IChildren) => {
	const timmer = React.useRef<NodeJS.Timeout>({} as NodeJS.Timeout);

	const [loading, setLoading] = React.useState<ILoading>({} as ILoading);

	const handleLoading = () => {
		setLoading((prev) => ({ ...prev, main: true, aux: true }));
	};

	const handleMessage = (message: string) => {
		setLoading((prevState) => ({ ...prevState, message }));
	};

	const handleStopLoading = () => {
		timmer.current = setTimeout(() => {
			setLoading((prev) => ({
				...prev,
				aux: false,
				main: true,
				message: undefined
			}));
			clearTimeout(timmer.current);
		}, INITIAL_LOADING_TIME);
	};

	const value = {
		loading,
		setLoading,
		handleLoading,
		handleMessage,
		handleStopLoading
	};

	return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

export const useLoading = () => {
	const loading = useContextSelector(LoadingContext, (v) => v.loading);
	const setLoading = useContextSelector(LoadingContext, (v) => v.setLoading);

	const handleLoading = useContextSelector(LoadingContext, (v) => v.handleLoading);
	const handleMessage = useContextSelector(LoadingContext, (v) => v.handleMessage);
	const handleStopLoading = useContextSelector(LoadingContext, (v) => v.handleStopLoading);

	return {
		loading,
		setLoading,
		handleLoading,
		handleMessage,
		handleStopLoading
	};
};
