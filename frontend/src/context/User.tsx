import { useState } from 'react';
import { IChildren } from 'types/children';
import { ISetState } from 'types/state';

import { createContext, useContextSelector } from 'use-context-selector';
import { LoginReturn } from '../../../types/login';
import { consultToken } from 'utils';

interface User {
	result: {
		userId: string;
		username: string;
		sessionToken: string;
		customer_id: string;
	};
}

interface UserContextProps {
	user: User;
	setUser: ISetState<User>;

	saveToken: (user: LoginReturn) => void;
	consultToken: () => boolean;

	theme: 'light' | 'dark';
	setTheme: ISetState<'light' | 'dark'>;
}

export const UserContext = createContext({} as UserContextProps);

export const UserPrivider = ({ children }: IChildren) => {
	const [user, setUser] = useState<User>({} as User);
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const saveToken = (user: LoginReturn) => {
		window.localStorage.setItem('user', JSON.stringify(user));
	};

	const value = {
		user,
		setUser,
		saveToken,
		consultToken,
		setTheme,
		theme,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
	const user = useContextSelector(UserContext, (state) => state.user);
	const setUser = useContextSelector(UserContext, (state) => state.setUser);
	const saveToken = useContextSelector(UserContext, (state) => state.saveToken);
	const consultToken = useContextSelector(UserContext, (state) => state.consultToken);
	const theme = useContextSelector(UserContext, (state) => state.theme);
	const setTheme = useContextSelector(UserContext, (state) => state.setTheme);
	
	return {
		theme,
		setTheme,
		user,
		setUser,
		saveToken,
		consultToken,
	};
};
