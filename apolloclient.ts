import { ApolloClient, DefaultOptions } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const graphqlEndpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://homeoffice-backend-quarkusdroneshop-demo.apps.cluster-8sffx.8sffx.sandbox2156.opentlc.com/graphql';
console.log("GraphQL Endpoint: " + graphqlEndpoint);

const link = new HttpLink({ uri: graphqlEndpoint })
const cache = new InMemoryCache()


const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}


const client = new ApolloClient({
  link,
  cache,
  defaultOptions: defaultOptions,
  fetchOptions: {
    mode: 'no-cors',
  },
})
export default client