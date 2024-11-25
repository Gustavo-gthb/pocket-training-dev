import React, { useState, useEffect } from 'react';
import { PayContainer } from './style';

const { googlePayClient } = window;

export const baseCardPaymentMethod = {
	type: 'CARD',
	parameters: {
		allowedCardNetworks: ['VISA', 'MASTERCARD'],
		allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS']
	}
};

export const googlePayBaseConfiguration = {
	apiVersion: 2,
	apiVersionMinor: 0,
	allowedPaymentMethods: [baseCardPaymentMethod]
};

export default function GooglePayButton() {
	const [gPayBtn, setGPayBtn] = useState(null);

	function createAndAddButton() {
		if (googlePayClient) {
			const googlePayButton = googlePayClient.createButton({
				buttonColor: 'default',

				buttonType: 'long',

				onClick: processPayment
			});

			setGPayBtn(googlePayButton);
		}
	}

	function processPayment() {
		const tokenizationSpecification = {
			type: 'PAYMENT_GATEWAY',
			parameters: {
				gateway: 'pagarme',
				gatewayMerchantId: import.meta.env.VITE_APP_PAGARME_ACCOUNT_ID
			}
		};

		const cardPaymentMethod = {
			type: 'CARD',
			tokenizationSpecification: tokenizationSpecification,
			parameters: {
				allowedCardNetworks: ['VISA', 'MASTERCARD'],
				allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
				billingAddressRequired: true,
				billingAddressParameters: {
					format: 'FULL',
					phoneNumberRequired: true
				}
			}
		};

		const transactionInfo = {
			totalPriceStatus: 'FINAL',
			totalPrice: '15',
			currencyCode: 'BRL'
		};

		const merchantInfo = {
			merchantName: 'Treino de bolso - Plano mensal'
		};

		const paymentDataRequest = {
			...googlePayBaseConfiguration,
			...{
				allowedPaymentMethods: [cardPaymentMethod],
				transactionInfo,
				merchantInfo
			}
		};

		googlePayClient
			.loadPaymentData(paymentDataRequest)
			.then(function (paymentData, teste) {
				console.log('Payment Sucessfull');
				console.log(paymentData);
			})
			.catch(function (err) {
				console.log('Payment Failed');
				console.log(err);
			});
	}

	useEffect(() => {
		googlePayClient
			?.isReadyToPay(googlePayBaseConfiguration)
			.then(function (response) {
				if (response.result) {
					createAndAddButton();
				} else {
					alert('Unable to pay using Google Pay');
				}
			})
			.catch(function (err) {
				console.error('Error determining readiness to use Google Pay: ', err);
			});
	}, []);

	return (
		<PayContainer
			onClick={processPayment}
			dangerouslySetInnerHTML={{ __html: gPayBtn && gPayBtn.innerHTML }}
		/>
	);
}
