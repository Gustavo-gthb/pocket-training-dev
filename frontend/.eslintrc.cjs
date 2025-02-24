module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'ban-ts-comment': 'off',
		'no-inner-declarations': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'react-refresh/only-export-components': 'off'
	}
};
