import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title> React Avançado - Boilerplate</title>
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="apple-touch-icon" href="/img/icon-512.png" />
				<meta
					name="description"
					content="A boilerplate to start to work with ReactJs, Next.JS, TypeScript and Styled Components"
				/>
				<link rel="manifest" href="/public/manifest.json" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}
export default App;
