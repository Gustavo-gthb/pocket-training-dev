import React from 'react';

import data from '../../../../../data/new_data.json';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { AutoCompleteBase } from '..';

const TrainSetAutoComplete = React.forwardRef<HTMLInputElement, ReturnType<UseFormRegister<FieldValues>>>(({ onChange, onBlur, name }, ref) => {
	const filterFunction = (searchTerm: string) => {
		const uniqueResult = data.filter((item, index, self) => self.findIndex((t) => t.target === item.target) === index);
		const results = uniqueResult.filter((item) => item.target.toLowerCase().includes(searchTerm.toLowerCase()));
		return results;
	};

	return (
		<AutoCompleteBase
			ref={ref}
			name={name}
			onBlur={onBlur}
			choise={'target'}
			onChange={onChange}
			filterFunction={filterFunction}
		/>
	);
});

export default TrainSetAutoComplete;
