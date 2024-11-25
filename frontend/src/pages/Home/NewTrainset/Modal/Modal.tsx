import { FormProvider, useForm } from 'react-hook-form';
import { useTrainSets } from 'context/TrainSet';
import { Button } from 'components';
import { TrainSetAutoComplete } from 'components/Autocompletes';
import { add_training_set } from 'service/train_set';
import { useUser } from 'context/User';
import { toast } from 'react-toastify';
import { Header, Main, Footer, Container, ButtonContainer, Section } from './style';

interface modalCreateProps {
	onClose: () => void;
}

interface Data {
	name: string;
}

const ModalCreateTrainSet = ({ onClose }: modalCreateProps) => {
	const { setTrainSets } = useTrainSets();
	const { user } = useUser();
	const methods = useForm<Data>();

	const { register, handleSubmit } = methods;

	const onSubmit = async (data: Data) => {
		try {
			const response = await add_training_set({
				name: data.name,
				token: user.result.sessionToken
			});

			setTrainSets((prev) => [
				// @ts-ignore
				...prev,
				{
					...data,
					id: response.data.id
				}
			]);
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		} finally {
			if (onClose) {
				onClose();
			}
		}
	};

	return (
		<>
			<Container onSubmit={handleSubmit(onSubmit)}>
				<Header>
					<h2>Criar novo treino</h2>
				</Header>
				<FormProvider {...methods}>
					<Main>
						<Section>
							<p>Nome do conjunto</p>
							<TrainSetAutoComplete
								required
								{...register('name', { required: true })}
							/>
						</Section>
					</Main>
				</FormProvider>

				<Footer>
					<ButtonContainer>
						<Button type='submit'>Salvar</Button>
					</ButtonContainer>
				</Footer>
			</Container>
		</>
	);
};

export default ModalCreateTrainSet;
