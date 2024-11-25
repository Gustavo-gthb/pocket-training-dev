const pagarmeClient = require('../../service/pagarme/index.js');

Parse.Cloud.define('login', async (request) => {
	const { username, password } = request.params;

	try {
		const user = await Parse.User.logIn(username, password);
		const now = new Date();
		now.setHours(now.getHours() + 1);

		return {
			success: true,
			userId: user.id,
			payed: user.get('payed') || false,
			expireAt: now.toISOString(),
			username: user.getUsername(),
			customer_id: user.get('customer_id'),
			sessionToken: user.getSessionToken()
		};
	} catch (error) {
		return {
			success: false,
			message: error.message
		};
	}
});

Parse.Cloud.define('signup', async (request) => {
	const { username, password, email } = request.params;

	try {
		const user = new Parse.User();
		user.set('email', email);
		user.set('username', username);
		user.set('password', password);

		await user.signUp(null, { useMasterKey: true });

		try {
			const { data: pagarme_customer_data } = await pagarmeClient.request({
				url: '/customers',
				method: 'POST',
				data: {
					email,
					name: username,
					type: 'individual'
				}
			});

			if (pagarme_customer_data.id) {
				user.set('customer_id', pagarme_customer_data.id);
				await user.save(null, { useMasterKey: true });
			} else {
				throw new Error('Erro ao criar usuário no Pagar.me');
			}
		} catch (error) {
			await user.destroy({ useMasterKey: true });
			throw error;
		}

		return { success: true };
	} catch (error) {
		return {
			success: false,
			message: error.message
		};
	}
});
