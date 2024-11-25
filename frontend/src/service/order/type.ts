interface Checkout {
	checkout_id: string;
	checkout_status: string;
	payment_url: string;
}

export interface NewOrderResponse {
	success: boolean;
	order_id: string;
	order_code: string;
	status: string;
	checkouts: Checkout[];
}
