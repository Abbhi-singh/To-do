
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';


const errorLink = onError((error) => {
  const { graphQLErrors, networkError } = error as {
    graphQLErrors?: Array<{ message: string; locations?: any; path?: any }>;
    networkError?: Error;
  };
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      // You can customize this to log to a service or show a toast
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI,
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
