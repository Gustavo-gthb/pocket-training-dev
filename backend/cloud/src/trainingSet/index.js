Parse.Cloud.define('add_training_set', async (request) => {
	const { name } = request.params;
	const user = request.user; // Obtém o usuário atualmente logado

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const TrainingSet = Parse.Object.extend('TrainingSet');
	const newTrainingSet = new TrainingSet();

	newTrainingSet.set('name', name);
	newTrainingSet.set('user', user);

	try {
		const response = await newTrainingSet.save(null, { useMasterKey: true });
		return {
			success: true,
			id:	response.id
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
});

Parse.Cloud.define('delete_training_set', async (request) => {
	const { id } = request.params;
	const user = request.user;

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const TrainingSet = Parse.Object.extend('TrainingSet');
	const query = new Parse.Query(TrainingSet);
	query.equalTo('objectId', id);

	try {
		const trainingSet = await query.first({ useMasterKey: true });
		if (trainingSet) {
			await trainingSet.destroy({ useMasterKey: true });
			return { 
				success: true,
				id: trainingSet.id
			};
		} else {
			return { success: false, message: 'Training set not found' };
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
});

Parse.Cloud.define('update_training_set', async (request) => {
	const { trainingSetId, name } = request.params;
	const user = request.user;

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const TrainingSet = Parse.Object.extend('TrainingSet');
	const query = new Parse.Query(TrainingSet);
	query.equalTo('objectId', trainingSetId);

	try {
		const trainingSet = await query.first();
		if (trainingSet) {
			trainingSet.set('name', name);
			await trainingSet.save(null, { useMasterKey: true });
			return { success: true };
		} else {
			return { success: false, message: 'Training set not found' };
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
});

Parse.Cloud.define('get_training_set', async (request) => {
	const user = request.user; // Obtém o usuário atualmente logado

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const TrainingSet = Parse.Object.extend('TrainingSet');
	const query = new Parse.Query(TrainingSet);
	query.equalTo('user', user); // Filtra pelo usuário logado

	try {
		const trainingSets = await query.find({ useMasterKey: true });

		return {
			success: true,
			trainingSets: trainingSets.map((trainingSet) => ({
				id: trainingSet.id,
				name: trainingSet.get('name')
			}))
		};
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
	}
});
