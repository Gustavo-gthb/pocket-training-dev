import { useLocation } from 'react-router-dom';
import { hideAllPageScroll, showAllPageScroll } from 'utils/scroll.js';
import { motion } from 'framer-motion';

export const TemplateScrollUpAnimation = ({ children }) => {
	const location = useLocation();

	return (
		<motion.div
			style={{ height: '100%' }}
			key={location.pathname}
			animate={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0, scale: 0.9 }}
			exit={{
				scale: 1.6,
				opacity: 0,
				transition: {
					duration: 0.7,
					ease: [1, -0.05, 0.66, 1]
				}
			}}
			onAnimationStart={() => hideAllPageScroll()}
			onAnimationComplete={() => showAllPageScroll()}>
			{children}
		</motion.div>
	);
};
