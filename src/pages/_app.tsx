import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { useApollo } from 'utils/apollo';

function App({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Won Games</title>
					<link rel="shortcut icon" href="/img/icon-512.png" />
					<link rel="apple-touch-icon" href="/img/icon-512.png" />
					<meta name="description" content="Won Games store" />
					<link rel="manifest" href="/public/manifest.json" />
				</Head>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
}
export default App;
