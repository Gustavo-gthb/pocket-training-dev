import Login from 'pages/Login';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';

import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { consultToken } from 'utils';
import { useLoading } from 'context/Loading';
import { LoadingScreen } from 'screens';
import { AnimatePresence } from 'framer-motion';
import { TemplateScrollUpAnimation } from 'layout/LayoutAnimations/ScrollUp';
import { TemplateDefaultAnimation } from 'layout/LayoutAnimations/Default';
import TrainLayout from 'layout/TrainLayout';
import Train from 'pages/Train';
import Exercise from 'pages/Train/Exercise';
import Ver from 'pages/Ver';
import { toast } from 'react-toastify';
import React from 'react';

const RequireAuth = () => {
	const location = useLocation();
	const user = location?.state?.user || {};

	const consult = consultToken();

	if (consult) {
		return <Outlet />;
	}

	if (user?.result?.userId) {
		return <Outlet />;
	}

	return <Navigate to='/login' />;
};

export const RouterController = () => {
	const isFirstRender = React.useRef(true);
	const { loading } = useLoading();
	const location = useLocation();

	React.useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;

			async function detectUpdate() {
				const swRegistration = await navigator.serviceWorker.register('/sw.js');

				swRegistration.addEventListener('updatefound', () => {
					const newWorker = swRegistration.installing;

					newWorker.onstatechange = () => {
						if (newWorker.state === 'installed') {
							if (navigator.serviceWorker.controller) {
								toast.info('Nova versão disponível, clique aqui para atualizar', {
									onClick: () => {
										window.location.reload();
									}
								});
							}
						}
					};
				});
			}

			return;
		}
	}, []);

	if (loading.main) {
		return <LoadingScreen />;
	}

	return (
		<AnimatePresence mode='wait'>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path='/ver'
					element={<Ver />}
				/>

				<Route
					path='/login'
					element={
						<TemplateScrollUpAnimation>
							<Login />
						</TemplateScrollUpAnimation>
					}
				/>

				<Route
					path='/cadastro'
					element={
						<TemplateScrollUpAnimation>
							<SignUp />
						</TemplateScrollUpAnimation>
					}
				/>

				<Route
					path='*'
					element={<Navigate to='/' />}
				/>

				<Route
					path='/'
					element={
						<RequireAuth>
							<Navigate to='/home' />
						</RequireAuth>
					}>

					<Route
						path='/home'
						element={
							<TemplateDefaultAnimation>
								<Home />
							</TemplateDefaultAnimation>
						}
					/>

					<Route
						path='/treino/:trainSet_id'
						element={<TrainLayout />}>
						<Route
							path=''
							element={<Train />}
						/>
						<Route
							path='exercicio/:train_id'
							element={<Exercise />}
						/>
					</Route>
				</Route>
			</Routes>
		</AnimatePresence>
	);
};
