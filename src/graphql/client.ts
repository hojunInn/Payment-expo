import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
 
 
const httpLink = new HttpLink({
    uri: `http://localhost:1337/graphql`,
});
 
export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
 
export default client;