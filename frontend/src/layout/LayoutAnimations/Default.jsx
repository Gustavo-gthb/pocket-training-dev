import { useLocation } from 'react-router-dom';
import { hideAllPageScroll, showAllPageScroll } from 'utils/scroll.js';
import { motion } from 'framer-motion';

export const TemplateDefaultAnimation = ({ children }) => {
	const location = useLocation();

	return (
		<motion.div
			style={{ height: '100%' }}
			key={location.pathname}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{
				opacity: 0
			}}
			onAnimationStart={() => hideAllPageScroll()}
			onAnimationComplete={() => showAllPageScroll()}>
			{children}
		</motion.div>
	);
};
