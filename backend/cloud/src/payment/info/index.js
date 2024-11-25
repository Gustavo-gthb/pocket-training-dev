const pagarmeClient = require('../../../service/pagarme/index.js');

Parse.Cloud.define('set_not_see_again_payment_confirm_message', async (request) => {
	const { new_value } = request.params;

	try {
		const user = new Parse.User();

		if (!user.get('payed')) {
			throw new Error('User not payed');
		}

		if (new_value) {
			user.set('messages', new_value);
			await user.save(null, { useMasterKey: true });
		}
	} catch (error) {
		return {
			success: false,
			message: error.message
		};
	}
});

Parse.Cloud.define('get_payment_info', async (request) => {
	const user = request.user;
	const { order_id } = request.params;

	try {
		if (!user) {
			throw new Error('User not authenticated');
		}

		const { data: pagarme_response } = await pagarmeClient.request({
			url: `/orders/${order_id}`,
			method: 'GET'
		});

		if (pagarme_response) {
			const user = new Parse.User();

			if (pagarme_response.status === 'paid') {
				user.set('payed', true);
				await user.save(null, { useMasterKey: true });
			}

			return {
				success: true,
				status: pagarme_response.status,
				closed: pagarme_response.closed,
				closed_at: pagarme_response.closed_at
			};
		} else {
			return pagarme_response;
		}
	} catch (error) {
		return {
			success: false,
			message: error.message
		};
	}
});
