import React, { useRef, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { Content } from './style';

interface Props {
	children: React.ReactNode;
}

const BounceEffectComponent: React.FC<Props> = ({ children }) => {
	const controls = useAnimation();
	const [touchStartY, setTouchStartY] = useState<number>(0);
	const contentRef = useRef<HTMLDivElement>(null);

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchStartY(e.touches[0].clientY);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (!contentRef.current) return;

		const currentTouchY = e.touches[0].clientY;
		const difference = touchStartY - currentTouchY;

		// Adicione um limite para a diferença. Por exemplo, 5 pixels.
		const sensitivityThreshold = 1;

		if (
			(contentRef.current.scrollTop === 0 && difference < -sensitivityThreshold) ||
			(contentRef.current.scrollHeight - contentRef.current.scrollTop === contentRef.current.clientHeight && difference > sensitivityThreshold)
		) {
			controls.start({
				scaleY: 1.05
			});
		} else {
			controls.start({
				scaleY: 1
			});
		}
	};

	const handleTouchEnd = () => {
		controls.start({
			scaleY: 1,
			transition: { type: 'spring', stiffness: 300, damping: 20 }
		});
	};

	return (
		<Content
			ref={contentRef}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			animate={controls}
			style={{ overflowY: 'scroll' }}>
			{children}
		</Content>
	);
};

export default BounceEffectComponent;
