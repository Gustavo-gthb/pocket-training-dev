import { useState } from 'react';
import { IChildren } from 'types/children';
import { ISetState } from 'types/state';

import { createContext, useContextSelector } from 'use-context-selector';

interface Order {
	link: string;
}

interface Props {
	context: 'AFTER_PAY' | 'BEFORE_PAY';
	setContext: ISetState<Props['context']>;
	order: Order;
	setOrder: ISetState<Props['order']>;
}

export const PayContext = createContext({} as Props);

export const PayContextPrivider = ({ children }: IChildren) => {
	const [order, setOrder] = useState<Order>({} as Props['order']);
	const [context, setContext] = useState<Props['context']>('AFTER_PAY');

	const value = {
		context,
		setContext,
		order,
		setOrder
	};

	return <PayContext.Provider value={value}>{children}</PayContext.Provider>;
};

export const usePay = () => {
	const context = useContextSelector(PayContext, (state) => state.context);
	const setContext = useContextSelector(PayContext, (state) => state.setContext);

	const order = useContextSelector(PayContext, (state) => state.order);
	const setOrder = useContextSelector(PayContext, (state) => state.setOrder);

	return {
		context,
		setContext,
		order,
		setOrder
	};
};
