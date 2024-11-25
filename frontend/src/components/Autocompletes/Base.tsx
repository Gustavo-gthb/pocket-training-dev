import React, { ChangeEvent } from 'react';
import { Container, SuggestionsContainer, SuggestionsContent } from './style';

import { FieldValues, UseFormRegister, useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { DataType, Keys } from 'types/exercises';

interface IAutoCompleteBase extends ReturnType<UseFormRegister<FieldValues>> {
	handleSearch?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
	handleClickOnSuggestion?: (value: string) => void;
	filterFunction: (searchTerm: string) => DataType[];
	choise: Keys;
}

const AutoCompleteBase = React.forwardRef<HTMLInputElement, IAutoCompleteBase>(({ onChange, onBlur, name, choise, filterFunction }, ref) => {
	const { setValue, getValues } = useFormContext();

	const [customValue, setCustomValue] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const [byPassModal, setByPassModal] = React.useState(false);

	const searchTerm = React.useMemo(() => getValues(name), [getValues(name)]);

	const filteredCountries = React.useMemo(() => {
		if (!searchTerm) {
			setOpen(false);
			return [];
		}

		const results = filterFunction(searchTerm);

		if (byPassModal) {
			setOpen(false);
			return [];
		}

		if (results.length === 0) {
			setOpen(false);
			return [];
		}

		setOpen(true);
		return results.slice(0, 10);
	}, [customValue, byPassModal]);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>, value: string) => {
		setByPassModal(false);

		onChange(e);
		setCustomValue(value);
		setValue(name, value);
	};

	const handleClickOnSuggestion = (value: string) => {
		setOpen(false);
		setByPassModal(true);

		setValue(name, value);
		setCustomValue(value);
	};

	return (
		<Container $isOpen={open}>
			<input
				ref={ref}
				type='text'
				name={name}
				onBlur={onBlur}
				autoComplete='off'
				value={customValue}
				placeholder='Por ex: perna, braço, peito ...'
				onChange={(e) => handleSearch(e, e.target.value)}
			/>

			<AnimatePresence>
				{open && (
					<SuggestionsContainer
						key='suggestions'
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'fit-content', opacity: 1 }}
						transition={{
							duration: 0.1
						}}
						exit={{ height: 0, opacity: 0 }}>
						<SuggestionsContent>
							{filteredCountries?.map((item, index) => (
								<button
									type='button'
									key={item?.id || index}
									onClick={() => handleClickOnSuggestion(item[choise])}>
									{item[choise]}
								</button>
							))}
						</SuggestionsContent>
					</SuggestionsContainer>
				)}
			</AnimatePresence>
		</Container>
	);
});

export default AutoCompleteBase;
