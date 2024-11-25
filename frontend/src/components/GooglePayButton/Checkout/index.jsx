import React, { useState } from 'react';

function PaymentRequestComponent() {
	const [paymentResponse, setPaymentResponse] = useState(null);

	const requestPayment = async () => {
		if (window.PaymentRequest) {
			function buildShoppingCartDetails() {
				// Hardcoded for demo purposes:
				return {
					id: 'order-123',
					displayItems: [
						{
							label: 'Example item',
							amount: { currency: 'USD', value: '1.00' }
						}
					],
					total: {
						label: 'Total',
						amount: { currency: 'USD', value: '1.00' }
					}
				};
			}

			function buildSupportedPaymentMethodData() {
				// Example supported payment methods:
				return [{ supportedMethods: 'basic-card' }];
			}

			const request = new PaymentRequest(buildSupportedPaymentMethodData(), buildShoppingCartDetails());

			request.show().then((paymentResponse) => {
				// Here we would process the payment. For this demo, simulate immediate success:
				paymentResponse.complete('success').then((e) => {
					console.log(e);
				});
			});

			// Dummy payment request to check whether payment can be made
			new PaymentRequest(buildSupportedPaymentMethodData(), {
				total: { label: 'Stub', amount: { currency: 'USD', value: '0.01' } }
			})
				.canMakePayment()
				.then((result) => {
					if (result) {
						// Real payment request
						const request = new PaymentRequest(buildSupportedPaymentMethodData(), {
							total: { label: 'Total', amount: { currency: 'USD', value: '1.00' } }
						});
						request.show().then((paymentResponse) => {
							// Here we would process the payment.
							paymentResponse.complete('success').then(() => {
								// Finish handling payment
							});
						});
					}
				});
		}
	};

	return (
		<div
			style={{
				width: '100%',
			}}>
			<button
				style={{
					width: '100%',
					padding: '15px 10px',
					borderRadius: '7px',
					border: 'none',
					color: 'var(--backgound)',
					backgroundColor: 'var(--subtitle-text)'
				}}
				onClick={requestPayment}>
				Request Payment
			</button>
			{paymentResponse && <div>Payment successful: {JSON.stringify(paymentResponse.details)}</div>}
		</div>
	);
}

export default PaymentRequestComponent;
