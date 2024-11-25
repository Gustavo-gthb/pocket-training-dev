const pagarmeClient = require('../../../service/pagarme/index.js');

Parse.Cloud.define('new_payment_order', async (request) => {
	const user = request.user;
	const { customer_id } = request.params;

	try {
		if (!user) {
			throw new Error('User not authenticated');
		}

		const { data: pagarme_response } = await pagarmeClient.request({
			url: '/orders',
			method: 'POST',
			data: {
				items: [
					{
						amount: 1499,
						description: 'Treino de bolso - Plano Pro',
						quantity: 1,
						code: '1'
					}
				],
				customer_id: customer_id,
				payments: [
					{
						amount: 1499,
						payment_method: 'checkout',
						checkout: {
							expires_in: 120,
							billing_address_editable: true,
							customer_editable: true,
							accepted_payment_methods: ['credit_card'],
							success_url: `${process.env.PAGARME_API_KEY}/checkout`,
							error_url: `${process.env.PAGARME_API_KEY}/checkout`,
							callback_url: `${process.env.PAGARME_API_KEY}/checkout`
						}
					}
				]
			}
		});

		if (pagarme_response) {
			return {
				success: true,
				order_id: pagarme_response?.id,
				order_code: pagarme_response?.code,
				status: pagarme_response?.status,
				checkouts: pagarme_response?.checkouts?.map((checkout) => ({
					checkout_id: checkout?.id,
					checkout_status: checkout?.status,
					payment_url: checkout?.payment_url
				}))
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
