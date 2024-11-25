class PagarMeClient {
	constructor() {
		const pagarme_api_key = process.env.PAGARME_API_KEY;

		if (!pagarme_api_key) {
			throw new Parse.Error(Parse.Error.INTERNAL_SERVER_ERROR, 'Chave da API do Pagar.me não configurada');
		}

		this.auth = 'Basic ' + Buffer.from(pagarme_api_key + ':').toString('base64');
		this.baseUrl = 'https://api.pagar.me/core/v5';
	}

	async request({ method = 'POST', url, data }) {
		return await Parse.Cloud.httpRequest({
			method,
			url: this.baseUrl + url,
			headers: {
				Authorization: this.auth,
				'Content-Type': 'application/json'
			},
			body: {
				...data
			}
		});
	}
}

const pagarmeClient = new PagarMeClient();
module.exports = pagarmeClient;
