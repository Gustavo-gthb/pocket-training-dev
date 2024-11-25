import VersionShow from 'components/VersionShow';
import { useLoading } from 'context/Loading';
import useRevalidate from 'hooks/useRevalidade';
import React from 'react';
import { RouterController } from 'routes';
import '@dotlottie/react-player/dist/index.css';
import { useCustomTheme } from 'context/Theme';

const App = () => {
	const { setTheme } = useCustomTheme();

	const isFirstRender = React.useRef(true);

	const { handleLoading, handleStopLoading, handleMessage } = useLoading();
	const { handleRevalidate } = useRevalidate();

	React.useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			if (event.matches) {
				setTheme('dark');
			} else {
				setTheme('light');
			}
		});

		if (isFirstRender.current) {
			try {
				handleLoading();
				handleMessage('Puxando ferro ...');
				handleRevalidate();
			} finally {
				isFirstRender.current = false;
				handleStopLoading();
			}
		}
	}, []);

	return (
		<>
			<VersionShow />
			<RouterController />
		</>
	);
};

export default App;
