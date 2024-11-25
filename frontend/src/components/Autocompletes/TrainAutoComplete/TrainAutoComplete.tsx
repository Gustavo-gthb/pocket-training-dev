import React from 'react';

import JSON from '../../../../../data/new_data.json';

const data = JSON.slice(0, 1100);

import { FieldValues, UseFormRegister } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useTrainSets } from 'context/TrainSet';
import AutoCompleteBase from '../Base';

const TrainAutoComplete = React.forwardRef<HTMLInputElement, ReturnType<UseFormRegister<FieldValues>>>(({ onChange, onBlur, name }, ref) => {
	const { trainSet_id } = useParams();
	const { getTrainSetById } = useTrainSets();

	const trainSet = React.useMemo(() => getTrainSetById(trainSet_id), [trainSet_id]);

	const filterFunction = (searchTerm: string) => {
		const uniqueResult = data.filter((item, index, self) => self.findIndex((t) => t.name === item.name) === index);
		const resultBasedOnTrainSet = uniqueResult.filter((item) => item.target.includes(trainSet?.name || ''));
		const results = resultBasedOnTrainSet.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

		return results;
	};

	return (
		<AutoCompleteBase
			ref={ref}
			name={name}
			onBlur={onBlur}
			onChange={onChange}
			choise={'name'}
			filterFunction={filterFunction}
		/>
	);
});

export default TrainAutoComplete;
