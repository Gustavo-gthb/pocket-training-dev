import React from 'react';
import { IChildren } from 'types/children';

import { createContext, useContextSelector } from 'use-context-selector';
import { ISetState } from 'types/state';
import { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

export const styleForModalOpen = css`
	filter: blur(5px);
`;

export type IType = 'exercise' | 'train';

type Modal = {
	is: boolean;
	submit: boolean;
	type: IType;
};

interface TrainMenu {
	modal: Modal;
	setModal: ISetState<Modal>;
	actualType: IType;
}

export const TrainSetContext = createContext({} as TrainMenu);

const routePatterns: Array<{ regex: RegExp; type: IType }> = [
	{ regex: /treino\/\w+\/exercicio\/\w+/, type: 'exercise' }
	// Adicione novos padrões e tipos aqui
];

export const TrainMenuProvider = ({ children }: IChildren) => {
	const location = useLocation();

	const [modal, setModal] = React.useState({} as Modal);

	const actualType: IType = React.useMemo(() => {
		for (const pattern of routePatterns) {
			if (pattern.regex.test(location.pathname)) {
				return pattern.type;
			}
		}
		return 'train';
	}, [location.pathname]);

	const value = {
		modal,
		setModal,
		actualType
	};

	return <TrainSetContext.Provider value={value}>{children}</TrainSetContext.Provider>;
};

export const useTrainMenu = () => {
	const modal = useContextSelector(TrainSetContext, (state) => state.modal);
	const setModal = useContextSelector(TrainSetContext, (state) => state.setModal);

	const actualType = useContextSelector(TrainSetContext, (state) => state.actualType);

	return {
		modal,
		setModal,
		actualType
	};
};
