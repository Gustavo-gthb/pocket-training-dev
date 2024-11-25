import React from 'react';
import ModalBottom from 'components/ModalBottom';

import { Button } from 'components';
import { useUser } from 'context/User';
import { toast } from 'react-toastify';
import { newOrder } from 'service/order';
import { PayContextPrivider, usePay } from './context';

import { CheckoutButton, Content, PriceContainer, Section, TextContainer } from './style';
import { DotLottiePlayer } from '@dotlottie/react-player';

const PayModal = () => {
	const [loading, setLoading] = React.useState(false);
	const { user } = useUser();
	const { context } = usePay();
	const [open, setOpen] = React.useState(false);

	const { setContext } = usePay();

	const handleClick = async () => {
		try {
			setLoading(true);
			const { data: new_order_response } = await newOrder(user.result.customer_id, user.result.sessionToken);

			if (new_order_response) {
				window.open(new_order_response.checkouts[0].payment_url, '_blank');
			}

			toast.success('Pedido criado com sucesso!');
		} catch (error) {
			toast.error('Erro ao criar pedido!');
		} finally {
			setLoading(false);
			setContext('BEFORE_PAY');
		}
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setOpen(true);
		}, 1500);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<ModalBottom
			open={open}
			onClose={() => setOpen(false)}
			fullScreen={context === 'BEFORE_PAY'}>
			<Content>
				{context === 'AFTER_PAY' && (
					<>
						<TextContainer>
							<h1>Assine para continuar</h1>
							<p>A assinatura é mensal e você pode cancelar a qualquer momento.</p>
						</TextContainer>
						<PriceContainer>
							<h1>
								R$ 14,99
								<span>/mês</span>
							</h1>
						</PriceContainer>
						<CheckoutButton>
							{loading ? (
								<Button
									disabled
									style={{
										gap: '10px',
										display: 'flex',
										flexDirection: 'row',
									}}>
									<DotLottiePlayer
										loop
										autoplay
										style={{ width: '30px', height: '30px' }}
										src={`/animations/home_loading-light.lottie`}
									/>
									Carregando ...
								</Button>
							) : (
								<Button onClick={handleClick}>Assinar</Button>
							)}
						</CheckoutButton>
					</>
				)}

				{context === 'BEFORE_PAY' && (
					<>
						<DotLottiePlayer
							loop
							autoplay
							src={`/animations/train_loading.lottie`}
						/>
						<Section>
							<h1>Aguarde enquanto preparamos o seu pedido ...</h1>
							<p>Você sera redirecionado ao checkout do pagarme</p>
						</Section>
					</>
				)}
			</Content>
		</ModalBottom>
	);
};

const PayModalProvided = () => (
	<PayContextPrivider>
		<PayModal />
	</PayContextPrivider>
);

export default PayModalProvided;
