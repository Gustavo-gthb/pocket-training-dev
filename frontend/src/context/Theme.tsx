import { useState } from 'react';
import { IChildren } from 'types/children';
import { ISetState } from 'types/state';

import { createContext, useContextSelector } from 'use-context-selector';

interface Props {
	theme: 'light' | 'dark';
	setTheme: ISetState<'light' | 'dark'>;
}

export const CustomThemeContext = createContext({} as Props);

export const CustomThemeContextPrivider = ({ children }: IChildren) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const value = {
		setTheme,
		theme
	};

	return <CustomThemeContext.Provider value={value}>{children}</CustomThemeContext.Provider>;
};

export const useCustomTheme = () => {
	const theme = useContextSelector(CustomThemeContext, (state) => state.theme);
	const setTheme = useContextSelector(CustomThemeContext, (state) => state.setTheme);

	return {
		theme,
		setTheme
	};
};
