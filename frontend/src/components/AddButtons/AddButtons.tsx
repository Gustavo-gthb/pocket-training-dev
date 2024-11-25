import React from 'react';
import { Container, ButtonNeg, Square, ButtonPos } from './style';
import { useState } from 'react';
import { FieldValues, UseFormRegister, useFormContext } from 'react-hook-form';

/**
 * AddButtons de incremento e decremento
 *
 * **Alerta**:
 * É necessário utilizar esse componente dentro de um FormProvider
 */
const AddButtons = React.forwardRef<HTMLInputElement, ReturnType<UseFormRegister<FieldValues>>>(({ onChange, onBlur, name }, ref) => {
	const { setValue } = useFormContext();

	const [count, setCount] = useState(0);

	const add = () => {
		const newCount = count + 1;

		setCount(newCount);
		setValue(name, newCount);
	};

	const unAdd = () => {
		const newCount = count - 1;

		setCount(newCount);
		setValue(name, newCount);
	};

	return (
		<Container>
			<ButtonNeg
				onClick={unAdd}
				whileTap={{ scale: 0.9 }}>
				-
			</ButtonNeg>

			<Square
				ref={ref}
				name={name}
				type='number'
				onBlur={onBlur}
				onChange={onChange}
				className='styled-input'
			/>

			<ButtonPos
				onClick={add}
				whileTap={{ scale: 0.9 }}>
				+
			</ButtonPos>
		</Container>
	);
});

export default AddButtons;
