export const translateError = (mensagem: string): string => {
	const translateMap: { [key: string]: string } = {
		'Invalid username/password.': 'Nome de usuário/senha inválidos',
		'Account already exists for this username.': 'Conta já existe para este nome de usuário.',
		'Username must be a string.': 'Nome de usuário deve ser um texto.',
		'Account already exists for this email address.': 'Conta já existe para este endereço de e-mail.',
	};

	return translateMap[mensagem] || 'Erro desconhecido.';
};
