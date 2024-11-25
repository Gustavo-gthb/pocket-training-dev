import React from 'react';
import { Container } from './style';

import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import { genUID } from 'utils';

import { TrainAutoComplete } from 'components';

import { useTrain } from 'context/Train';
import { useTrainMenu } from 'context/TrainMenu';

interface Data {
	title: string;
}

const Train = () => {
	const { modal } = useTrainMenu();
	const { setTrains } = useTrain();
	const { trainSet_id } = useParams();

	const methods = useForm({
		defaultValues: {
			title: ''
		}
	});

	const { register, handleSubmit } = methods;

	const onSubmit = (data: Data) => {
		// @ts-ignore
		setTrains((prev) => [
			...prev,
			{
				...data,
				id: genUID(),
				training_set: trainSet_id
			}
		]);
	};

	React.useEffect(() => {
		if (modal.submit) {
			handleSubmit(onSubmit)();
		}
	}, [modal.submit]);

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<p>Nome do exercício</p>
					<TrainAutoComplete
						required
						{...register('title', { required: true })}
					/>
				</FormProvider>
			</form>
		</Container>
	);
};

export default Train;
