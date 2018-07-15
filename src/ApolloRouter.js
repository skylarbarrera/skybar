
// apollo imports
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'



export const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql' }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});





