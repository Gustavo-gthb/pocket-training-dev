export interface Subscriptions {
	payment_method: string;
	interval: string;
	minimum_price: number;
	interval_count: number;
	billing_type: string;
	installments: number;
	card_id: string;
	card: Card;
	pricing_scheme: PricingScheme;
	quantity: number;
	currency: string;
	description: string;
	statement_descriptor: string;
	customer_id: string;
}

export interface Card {}

export interface PricingScheme {
	scheme_type: string;
	price: number;
	mininum_price: number;
}
