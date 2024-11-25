import { PanInfo } from 'framer-motion';
import { Circle, CircleContainer, Container, Content, DeleteContainer, DeleteIcon, InfoContent, Reps } from './style';
import { useNavigate } from 'react-router-dom';
import { useTrainSets } from 'context/TrainSet';
import Loading from 'assets/animations/Loading';

interface ITrainCard {
	title: string;
	reps: number;
	id: string;
	index: number;
}

const TrainCard = ({ title, reps, id, index }: ITrainCard) => {
	const { deleteTrainSetById, loading } = useTrainSets();

	const navigate = useNavigate();

	const deleteItem = () => {
		deleteTrainSetById(id);
		console.log('aaaaa', id)
	};

	const handleDragEnd = (_: unknown, info: PanInfo) => {
		// Verificar se a distância arrastada excede um certo limite, por exemplo, 100px
		if (info.offset.x < -100) {
			deleteItem(); // Chamar função de delete
		}
	};

	const handleClick = () => {
		navigate(`/treino/${id}`);
	};

	return (
		<Container
			initial={{ opacity: 0, x: 100 }}
			whileTap={{ scale: 0.9 }}
			animate={{ opacity: 1, x: 0, transition: { delay: 0.1 * index } }}
			exit={{ opacity: 0, x: -100 }}>
			<Content
				onClick={handleClick}
				onDragStartCapture={() => {
					console.log('drag start');
				}}
				drag='x' 
				onDragEnd={handleDragEnd}
				whileDrag={{ scale: 1.05 }}
				dragConstraints={{ left: -50, right: 0 }}>
				<h1>{title}</h1>

				<CircleContainer>
					<Circle />
				</CircleContainer>

				<InfoContent>
					<Reps>{reps}</Reps>
					<p>Exercícios</p>
				</InfoContent>
			</Content>
			<DeleteContainer key='delete_icon_train_set'>{loading ? <Loading /> : <DeleteIcon>X</DeleteIcon>}</DeleteContainer>
		</Container>
	);
};

export default TrainCard;
