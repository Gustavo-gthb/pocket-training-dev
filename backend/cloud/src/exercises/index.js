Parse.Cloud.define('add_exercises', async (request) => {
	const { reps, weight, train_id } = request.params;
	const user = request.user; // Obtém o usuário atualmente logado

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const Exercise = Parse.Object.extend('Exercises');
	const newExercise = new Exercise();

	// Vincula o treino ao exercício
	const Train = Parse.Object.extend('Train');
	const train = new Train();
	train.id = train_id;

	newExercise.set('reps', reps);
	newExercise.set('weight', weight);
	newExercise.set('train_id', train);

	try {
		await newExercise.save(null, { useMasterKey: true });
		return { success: true, exerciseId: newExercise.id };
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
	}
});

Parse.Cloud.define('update_exercises', async (request) => {
	const { reps, weight, exerciseId } = request.params;
	const user = request.user; // Obtém o usuário atualmente logado

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const Exercise = Parse.Object.extend('Exercises');
	const query = new Parse.Query(Exercise);

	try {
		const exerciseToUpdate = await query.get(exerciseId);

		if (reps) {
			exerciseToUpdate.set('reps', reps);
		}
		if (weight) {
			exerciseToUpdate.set('weight', weight);
		}

		await exerciseToUpdate.save(null, { useMasterKey: true });
		return { success: true, message: 'Exercise updated successfully' };
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
	}
});

Parse.Cloud.define('delete_exercises', async (request) => {
	const { exerciseId } = request.params;
	const user = request.user; // Obtém o usuário atualmente logado

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const Exercise = Parse.Object.extend('Exercises');
	const query = new Parse.Query(Exercise);

	try {
		const exerciseToDelete = await query.get(exerciseId);
		await exerciseToDelete.destroy({ useMasterKey: true });

		return { success: true, message: 'Exercise deleted successfully' };
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
	}
});

Parse.Cloud.define('get_exercises', async (request) => {
	const { exerciseId } = request.params;
	const user = request.user; // Obtém o usuário atualmente logado

	if (!user) {
		return { success: false, message: 'User not authenticated' };
	}

	const Exercise = Parse.Object.extend('Exercises');
	const query = new Parse.Query(Exercise);

	try {
		const exercise = await query.get(exerciseId, { useMasterKey: true });

		return {
			success: true,
			exercise: {
				id: exercise.id,
				reps: exercise.get('reps'),
				weight: exercise.get('weight'),
				train_id: exercise.get('train').id
			}
		};
	} catch (error) {
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
	}
});
