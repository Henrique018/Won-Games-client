import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';

import Button from 'components/Button';
import Textfield from 'components/Textfield';
import { FormWrapper, FormLink } from 'components/Form';

const FormSignUp = () => {
	return (
		<FormWrapper>
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

			<FormLink>
				Already have an account?
				<Link href="/sign-in">
					<a>Sign In</a>
				</Link>
			</FormLink>
		</FormWrapper>
	);
};

export default FormSignUp;
