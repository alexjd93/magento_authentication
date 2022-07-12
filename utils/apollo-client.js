import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://magentodev.223.165.77.23.sth.nz/graphql',
  cache: new InMemoryCache()
});

export default client;
 