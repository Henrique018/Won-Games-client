import { useMemo } from 'react';
import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined', //true
		link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = {}) {
	//verify if an apolloClient instance exists
	const apolloClientGlobal = apolloClient ?? createApolloClient();

	if (initialState) {
		apolloClientGlobal.cache.restore(initialState);
	}

	//always initialize with SSR mode and empty cache
	if (typeof window === 'undefined') return apolloClientGlobal;
	apolloClient = apolloClient ?? apolloClientGlobal;

	return apolloClient;
}

export function useApollo(initialState = {}) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
