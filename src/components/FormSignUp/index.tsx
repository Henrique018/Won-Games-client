import Link from 'next/link';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Email, Lock } from '@styled-icons/material-outlined';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';

import { MUTATION_REGISTER } from 'graphql/mutations/register';
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';

import Button from 'components/Button';
import Textfield from 'components/Textfield';
import { FormWrapper, FormLink } from 'components/Form';

const FormSignUp = () => {
	const [user, setUser] = useState<UsersPermissionsRegisterInput>({
		username: '',
		email: '',
		password: '',
	});

	const [createUser] = useMutation(MUTATION_REGISTER);

	const handleInput = (field: string, value: string) => {
		setUser((s) => ({ ...s, [field]: value }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		await createUser({
			variables: {
				input: {
					username: user.username,
					email: user.email,
					password: user.password,
				},
			},
		});
	};

	return (
		<FormWrapper>
			<form onSubmit={handleSubmit}>
				<Textfield
					type="text"
					name="username"
					icon={<UserCircle />}
					placeholder="Username"
					onInputChange={(v) => handleInput('username', v)}
				/>
				<Textfield
					type="email"
					inputMode="email"
					name="email"
					icon={<Email />}
					placeholder="E-mail"
					onInputChange={(v) => handleInput('email', v)}
				/>
				<Textfield
					type="password"
					name="password"
					icon={<Lock />}
					placeholder="Password"
					onInputChange={(v) => handleInput('password', v)}
				/>

				<Textfield
					type="password"
					name="comfirmPassword"
					icon={<Lock />}
					placeholder="Comfirm password"
					onInputChange={(v) => handleInput('comfirmPassword', v)}
				/>

				<Button type="submit" size="large" fullWidth>
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
