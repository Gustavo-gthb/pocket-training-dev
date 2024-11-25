import React from 'react';

import { 
	Input, 
	Section, 
	Container, 
	StyledError, 
	SubmitButton, 
	LoadingContainer 
} from './style';

import { login } from 'service/login';
import { toast } from 'react-toastify';
import { signUp } from 'service/signup';
import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loading from 'assets/animations/Loading';
import useLogin from 'hooks/useLogin';

interface Data {
	name: string;
	email: string;
	password: string;
}

const SignUp = () => {
	const navigate = useNavigate();
	const { handleLogin } = useLogin();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Data>();

	const [isLoading, setIsLoading] = React.useState(false);

	const loadingTimeOut = React.useRef<NodeJS.Timeout>();

	const handleLoading = () => {
		loadingTimeOut.current = setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	const onSubmit = (data: Data) => {
		const handleSignUp = async () => {
			try {
				setIsLoading(true);

				const { data: SignUpResponse } = await signUp({
					name: data.name,
					email: data.email,
					password: data.password
				});

				if (SignUpResponse.result.success) {
					toast.success('Cadastro realizado com sucesso');

					const loginPromise = login(data.name, data.password)
						.then(({ data: loginResponse }) => {
							if (loginResponse.result.success) {
								handleLogin(loginResponse);
							}
						})
						.catch((error) => {
							navigate('/login');
							throw error;
						});

					toast.promise(loginPromise, {
						pending: 'Redirecionando para home...',
						success: 'Login efetuado com sucesso! Redirecionando...',
						error: 'Um erro aconteceu ao tentar te redirecionar para a home'
					});
				}
			} catch (error) {
				if (error instanceof Error) {
					toast.error(error.message);
				}
			} finally {
				handleLoading();
			}
		};

		handleSignUp();
	};

	React.useEffect(() => {
		return () => {
			clearTimeout(loadingTimeOut.current as NodeJS.Timeout);
		};
	}, []);

	return (
		<Container>
			<h1>Cadastrar</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Section>
					<div>
						<label htmlFor='name'>Nome</label>
						<Input
							error={!!errors?.name}
							type='text'
							placeholder='Nome'
							{...register('name', { required: true })}
						/>
					</div>
					<StyledError show={errors.name ? 'true' : 'false'}>Nome é obrigatório</StyledError>
				</Section>

				<Section>
					<div>
						<label htmlFor='email'>Email</label>
						<Input
							error={!!errors?.email}
							type='email'
							placeholder='Email'
							{...register('email', { required: true })}
						/>
					</div>
					<StyledError show={errors.email ? 'true' : 'false'}>Email é obrigatório</StyledError>
				</Section>

				<Section>
					<div>
						<label htmlFor='password'>Senha</label>
						<Input
							error={!!errors?.password}
							type='password'
							placeholder='Senha'
							{...register('password', { required: true })}
						/>
					</div>
					<StyledError show={errors.password ? 'true' : 'false'}>Senha é obrigatório</StyledError>
				</Section>

				<SubmitButton
					type='submit'
					disabled={isLoading}
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
								Cadastrar
							</motion.span>
						)}
					</AnimatePresence>
				</SubmitButton>
			</form>

			<Link to='/login'>
				Já possui uma conta? <br /> Faça login
			</Link>
		</Container>
	);
};

export default SignUp;
