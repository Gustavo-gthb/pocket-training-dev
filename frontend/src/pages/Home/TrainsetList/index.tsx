import { Container, Content } from './style';
import TrainCard from './TrainCard';
import { useTrainSets } from 'context/TrainSet';
import { AnimatePresence } from 'framer-motion';

const TrainsetList = () => {
	const { trainSets } = useTrainSets();

	return (
		<Container>
			<Content>
				<AnimatePresence>
					{trainSets?.map((trainSet, index) => (
						<TrainCard
							reps={0}
							index={index}
							id={trainSet.id}
							key={trainSet.id}
							title={trainSet.name}
						/>
					))}
				</AnimatePresence>
			</Content>
		</Container>
	);
};

export default TrainsetList;
