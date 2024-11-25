import { DotLottiePlayer } from '@dotlottie/react-player';
import { useCustomTheme } from 'context/Theme';

const Loading = ({ ...rest }) => {
	const { theme } = useCustomTheme();

	if (theme === 'dark') {
		return (
			<DotLottiePlayer
				{...rest}
				src={`/animations/home_loading-dark.lottie`}
				autoplay
				loop></DotLottiePlayer>
		);
	}

	return (
		<DotLottiePlayer
			{...rest}
			src={`/animations/home_loading-light.lottie`}
			autoplay
			loop></DotLottiePlayer>
	);
};

export default Loading;
