import React from 'react';

import Item from './Item';

import { Container } from './style';
import { useTrain } from 'context/Train';
import { useParams } from 'react-router-dom';

const List = () => {
	const { trainSet_id } = useParams();
	const { getTrainsByTrainSetId } = useTrain();

	const train = React.useMemo(() => {
		if (!trainSet_id) return [];
		return getTrainsByTrainSetId(trainSet_id);
	}, [getTrainsByTrainSetId, trainSet_id]);

	return (
		<Container>
			{train.map((item) => (
				<Item
					id={item.id}
					key={item.id}
					name={item.title}
					series={item.series || 0}
				/>
			))}
		</Container>
	);
};

export default List;
