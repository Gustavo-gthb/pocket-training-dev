import GooglePayButton from '@google-pay/button-react';

const GooglePayButtonFromPackage = () => {
	return (
		<GooglePayButton
			environment='TEST'
			buttonSizeMode='fill'
			buttonType='short'
			onReadyToPayChange={({ isReadyToPay }) => {
				console.log('ready to pay change', isReadyToPay);
			}}
			paymentRequest={{
				apiVersion: 2,
				emailRequired: true,
				shippingAddressRequired: true,
				apiVersionMinor: 0,
				allowedPaymentMethods: [
					{
						type: 'CARD',
						parameters: {
							allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
							allowedCardNetworks: ['MASTERCARD', 'VISA']
						},
						tokenizationSpecification: {
							type: 'PAYMENT_GATEWAY',
							parameters: {
								gateway: 'pagarme',
								gatewayMerchantId: import.meta.env.VITE_APP_PAGARME_ACCOUNT_ID
							}
						}
					}
				],
				merchantInfo: {
					merchantId: import.meta.env.VITE_APP_PAGARME_ACCOUNT_ID,
					merchantName: 'Treino de bolso - Plano mensal'
				},
				transactionInfo: {
					totalPriceStatus: 'FINAL',
					totalPriceLabel: 'Total',
					totalPrice: '14.99',
					currencyCode: 'BRL',
					countryCode: 'BR'
				}
			}}
			style={{
				height: '50px',
				width: '100%'
			}}
			onLoadPaymentData={(paymentRequest) => {
				console.log('load payment data', paymentRequest);
			}}
		/>
	);
};

export default GooglePayButtonFromPackage;
