import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';

import Button from 'components/Button';
import Textfield from 'components/Textfield';
import * as S from './styles';

const FormSignUp = () => {
	return (
		<S.Wrapper>
			<S.Wrapper>
				<form>
					<Textfield
						type="text"
						name="name"
						icon={<UserCircle />}
						placeholder="Name"
					/>
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

					<Textfield
						type="comfirmPassword"
						name="comfirmPassword"
						icon={<Lock />}
						placeholder="Comfirm password"
					/>

					<Button size="large" fullWidth>
						Sign up now
					</Button>
				</form>

				<S.FormLink>
					Already have an account?
					<Link href="/sign-in">
						<a>Sign In</a>
					</Link>
				</S.FormLink>
			</S.Wrapper>
		</S.Wrapper>
	);
};

export default FormSignUp;
