import React from 'react';
import { Container, LoadingContainer, StyledError, SubmitButton } from './style';
import { useForm } from 'react-hook-form';
import { login } from 'service/login';
import { Link } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Loading from 'assets/animations/Loading';
import useLogin from 'hooks/useLogin';

interface Data {
	email: string;
	password: string;
}

const Login = () => {
	const [isLoading, setIsLoading] = React.useState(false);

	const { handleLogin: doLogin } = useLogin();

	const loadingTimeOut = React.useRef<NodeJS.Timeout>();

	const handleLoading = () => {
		loadingTimeOut.current = setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Data>();

	const onSubmit = (data: Data) => {
		const handleLogin = async () => {
			try {
				setIsLoading(true);
				const { data: response } = await login(data.email, data.password);

				if (response.result.success) {
					doLogin(response);
				}
			} catch (e) {
				if (e instanceof Error) {
					toast.error(e.message);
				}
			} finally {
				handleLoading();
			}
		};

		handleLogin();
	};

	React.useEffect(() => {
		return () => {
			clearTimeout(loadingTimeOut.current as NodeJS.Timeout);
		};
	}, []);

	return (
		<Container>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='email'
					placeholder='Email'
					{...register('email', { required: true })}
				/>
				<StyledError show={errors.email ? 'true' : 'false'}>O email é obrigatório</StyledError>

				<input
					type='password'
					placeholder='Password'
					{...register('password', { required: true })}
				/>
				<StyledError show={errors.password ? 'true' : 'false'}>Senha é obrigatório</StyledError>

				<SubmitButton
					disabled={isLoading}
					type='submit'
					whileTap={{ scale: 0.9 }}>
					<LoadingContainer open={isLoading ? 'open' : 'close'}>
						<Loading />
					</LoadingContainer>

					<AnimatePresence mode='wait'>
						{isLoading ? (
							<motion.span
								key='loading'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}>
								Carregando ...
							</motion.span>
						) : (
							<motion.span
								key='entrar'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}>
								Entrar
							</motion.span>
						)}
					</AnimatePresence>
				</SubmitButton>
			</form>

			<Link to='/cadastro'>
				Não tem uma conta ? <br /> Registre-se aqui
			</Link>
		</Container>
	);
};

export default Login;
