import Button from 'components/Button';
import Heading from 'components/Heading';
import Textfield from 'components/Textfield';
import * as S from './styles';

const FormProfile = () => {
	return (
		<S.Wrapper>
			<Heading lineBottom size="small">
				My profile
			</Heading>

			<S.Form>
				<Textfield name="name" placeholder="John Doe" label="Name" />
				<Textfield
					name="email"
					type="email"
					placeholder="example@gmail.com"
					label="Email"
					disabled
				/>
				<Textfield
					name="password"
					type="password"
					placeholder="type your password"
					label="Password"
				/>
				<Textfield
					name="newpassword"
					type="password"
					placeholder="new password"
					label="New Password"
				/>

				<Button>SAVE</Button>
			</S.Form>
		</S.Wrapper>
	);
};

export default FormProfile;
