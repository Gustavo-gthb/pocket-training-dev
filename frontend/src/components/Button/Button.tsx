import React, { ButtonHTMLAttributes } from 'react';
import { ContainerButton } from './style';
import { MotionProps } from 'framer-motion';

type ModifiedButtonHTMLAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'>;

interface ButtonProps extends ModifiedButtonHTMLAttributes, MotionProps {
	children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<ContainerButton
			whileTap={{ scale: 0.9 }}
			{...rest}>
			{children}
		</ContainerButton>
	);
};

export default Button;
