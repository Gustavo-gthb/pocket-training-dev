Parse.Cloud.define('add_train', async (request) => {
	const typedReq = request;

	const { title, default_reps, default_weight, trainingSetId } = typedReq.params;
	const user = request.user; // Obtém o usuário atualmente logado

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const Train = Parse.Object.extend('Train');
	const newTrain = new Train();

	// Vincula o conjunto de treinos ao treino individual
	const TrainingSet = Parse.Object.extend('TrainingSet');
	const trainingSet = new TrainingSet();
	trainingSet.id = trainingSetId;

	newTrain.set('title', title);

	newTrain.set('reps', default_reps);
	newTrain.set('weight', default_weight);

	newTrain.set('training_set', trainingSet);

	try {
		await newTrain.save(null, { useMasterKey: true });
		return { success: true, trainId: newTrain.id };
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
	}
});

Parse.Cloud.define('delete_train', async (request) => {
	const { trainId } = request.params;
	const user = request.user;

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const Train = Parse.Object.extend('Train');
	const query = new Parse.Query(Train);
	query.equalTo('objectId', trainId);

	try {
		const train = await query.first();
		if (train) {
			await train.destroy({ useMasterKey: true });
			return { success: true };
		} else {
			return { success: false, message: 'Train not found' };
		}
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
	}
});

Parse.Cloud.define('update_train', async (request) => {
	const { trainId, title, reps, series, color } = request.params;
	const user = request.user;

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const Train = Parse.Object.extend('Train');
	const query = new Parse.Query(Train);
	query.equalTo('objectId', trainId);

	try {
		const train = await query.first();
		if (train) {
			train.set('title', title);
			train.set('reps', reps);
			train.set('series', series);
			train.set('color', color);
			await train.save(null, { useMasterKey: true });
			return { success: true };
		} else {
			return { success: false, message: 'Train not found' };
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
});
