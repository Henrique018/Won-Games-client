import Head from 'next/head';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { CartProvider } from 'hooks/use-cart';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { useApollo } from 'utils/apollo';

function App({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<CartProvider>
					<Head>
						<title>Won Games</title>
						<link rel="shortcut icon" href="/img/icon-512.png" />
						<link rel="apple-touch-icon" href="/img/icon-512.png" />
						<meta name="description" content="Won Games store" />
						<link rel="manifest" href="/manifest.json" />
					</Head>
					<GlobalStyles />
					<NextNprogress
						color="#F231A5"
						startPosition={0.3}
						stopDelayMs={200}
						height={3}
						showOnShallow={true}
					/>
					<Component {...pageProps} />
				</CartProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}
export default App;
