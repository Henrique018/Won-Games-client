import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

import Textfield from 'components/Textfield';
import Button from 'components/Button';
import * as S from './styles';

const FormSignIn = () => {
	return (
		<S.Wrapper>
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

			<S.FormLink>
				Don&apos;t have an account?
				<Link href="/sign-up">
					<a>Sign Up</a>
				</Link>
			</S.FormLink>
		</S.Wrapper>
	);
};

export default FormSignIn;
