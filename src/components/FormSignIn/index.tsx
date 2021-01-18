import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Textfield from 'components/Textfield';
import { FormWrapper, FormLink } from 'components/Form';

import * as S from './styles';

const FormSignIn = () => {
	return (
		<FormWrapper>
			<form>
				<Textfield
					type="email"
					inputMode="email"
					name="email"
					icon={<Email />}
					placeholder="E-mail"
				/>
				<Textfield
					type="password"
					name="password"
					icon={<Lock />}
					placeholder="Password"
				/>

				<S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
				<Button size="large" fullWidth>
					Sign now
				</Button>
			</form>

			<FormLink>
				Don&apos;t have an account?
				<Link href="/sign-up">
					<a>Sign Up</a>
				</Link>
			</FormLink>
		</FormWrapper>
	);
};

export default FormSignIn;
