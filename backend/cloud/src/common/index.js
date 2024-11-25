Parse.Cloud.define('get_training_data', async (request) => {
	const user = request.user;

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	try {
		const TrainingSet = Parse.Object.extend('TrainingSet');
		const querySet = new Parse.Query(TrainingSet);
		querySet.equalTo('user', user);

		const sets = await querySet.find({ useMasterKey: true });

		const trainingSets = [];
		const allTrains = [];

		for (const set of sets) {
			trainingSets.push({
				id: set.id,
				name: set.get('name')
			});

			const Train = Parse.Object.extend('Train');
			const queryTrain = new Parse.Query(Train);
			queryTrain.equalTo('training_set', set);

			const trains = await queryTrain.find({ useMasterKey: true });

			for (const train of trains) {
				const Exercise = Parse.Object.extend('Exercises');
				const queryExercise = new Parse.Query(Exercise);

				const trainPointer = Train.createWithoutData(train.id);
				queryExercise.equalTo('train_id', trainPointer);

				const exercises = await queryExercise.find({ useMasterKey: true });

				allTrains.push({
					id: train.id,
					title: train.get('title'),
					training_set: train.get('training_set').id,
					default_reps: train.get('reps'),
					default_weight: train.get('weight'),
					series: exercises.length || 0,
					color: train.get('color'),
					exercises: exercises.map((exercise) => ({
						id: exercise.id,
						weight: exercise.get('weight'),
						reps: exercise.get('reps')
					}))
				});
			}
		}

		return {
			success: true,
			data: {
				trainingSets: trainingSets,
				trains: allTrains
			}
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
});
