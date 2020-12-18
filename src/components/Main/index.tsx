import * as S from './styles';

const Main = ({
	title = 'React avançado',
	description = 'TypeScript, React, NextJS e Styled Components',
}) => {
	return (
		<S.Wrapper>
			<S.Logo
				src="/img/logo.svg"
				alt="Imagem de um átomo e React avançado escrito ao lado"
			/>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
			<S.Ilustration
				src="/img/hero-illustration.svg"
				alt="Desenvolvedor de frente para o computador."
			/>
		</S.Wrapper>
	);
};

export default Main;
