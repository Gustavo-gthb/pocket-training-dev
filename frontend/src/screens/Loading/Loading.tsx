import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { General, Content, Container, MainText, Sub } from './style';

import Loading from 'assets/animations/Loading';
import { useLoading } from 'context/Loading';

const LoadingScreen = () => {
	const [exit, setExit] = React.useState(false);

	const { loading, setLoading } = useLoading();

	useEffect(() => {
		if (!loading.aux) {
			setExit(true);
		}
	}, [loading]);

	const handleFinishEnd = () => {
		setLoading((prev) => ({
			...prev,
			aux: false,
			main: false
		}));
	};

	return (
		<General exit={exit ? 'true' : 'false'}>
			<AnimatePresence onExitComplete={handleFinishEnd}>
				{!exit && (
					<Container
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						exit={{
							scale: 1.6,
							opacity: 0,
							transition: {
								duration: 0.7,
								ease: [1, -0.05, 0.66, 1]
							}
						}}>
						<Content>
							<div style={{ width: '100%', maxWidth: '200px' }}>
								<Loading
									width={50}
									height={50}
								/>
							</div>

							<MainText>Estamos carregando os treinos</MainText>

							<Sub>
								<motion.p
									style={{ marginTop: '0px' }}
									initial={{ y: 10, opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{
										y: 0,
										opacity: 1,
										transition: {
											delay: 1.3
										}
									}}>
									{loading.message}
								</motion.p>
							</Sub>
						</Content>
					</Container>
				)}
			</AnimatePresence>
		</General>
	);
};

export default LoadingScreen;
