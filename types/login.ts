export interface LoginReturn {
	result: {
		username: string;
		userId: string;
		expiresAt: Date;
		success: boolean;
		customer_id: string;
		sessionToken: string;
	};
}
