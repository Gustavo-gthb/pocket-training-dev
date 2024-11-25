class ParseClient {
	async request(route, callback) {
		Parse.Cloud.define(route, async (request) => {
			try {
				const user = request.user;

				if (!user) {
					return { success: false, message: 'User not authenticated' };
				}

				return await callback(request);
			} catch (error) {
				return {
					success: false,
					message: error.message
				};
			}
		});
	}
}

const parseClient = new ParseClient();
module.exports = parseClient;
