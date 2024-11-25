import React from 'react';

import ReactDOM from 'react-dom/client';

// @ts-ignore
import Parse from 'parse/dist/parse';

import './reset.css';

import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingProvider } from 'context/Loading';
import { TrainMenuProvider } from 'context/TrainMenu';
import { UserPrivider } from 'context/User';
import { TrainSetProvider } from 'context/TrainSet';
import { TrainProvider } from 'context/Train';
import App from 'App';
import { CustomThemeContextPrivider } from 'context/Theme';

const PARSE_HOST_URL = import.meta.env.VITE_APP_PARSE_HOST_URL;
const PARSE_JAVASCRIPT_KEY = import.meta.env.VITE_APP_PARSE_JAVASCRIPT_KEY;
const PARSE_APPLICATION_ID = import.meta.env.VITE_APP_PARSE_APPLICATION_ID;

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ToastContainer
			style={{ zIndex: 9999999999999 }}
			theme='colored'
		/>
		<BrowserRouter basename='/'>
			<LoadingProvider>
				<UserPrivider>
					<TrainSetProvider>
						<TrainProvider>
							<TrainMenuProvider>
								<CustomThemeContextPrivider>
									<App />
								</CustomThemeContextPrivider>
							</TrainMenuProvider>
						</TrainProvider>
					</TrainSetProvider>
				</UserPrivider>
			</LoadingProvider>
		</BrowserRouter>
	</React.StrictMode>
);
