// gen string uid
export const genUID = () => {
	return Math.random().toString(36).substr(2, 9);
};

export const consultToken = () => {
	const user = window.localStorage.getItem('user');
	if (user) {
		const userParsed = JSON.parse(user);
		const isTimeExpired = Date.now() > Number(userParsed.expire);
		if (isTimeExpired) {
			window.localStorage.removeItem('user');
			window.location.reload();
			return false;
		}

		return true;
	}
	return false;
};
