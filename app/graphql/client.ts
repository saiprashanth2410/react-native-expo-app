import { createClient } from 'urql';
import { SIGN_IN_MUTATION, SIGN_UP_MUTATION, REFRESH_TOKEN_MUTATION } from './mutations';

// Configure your GraphQL endpoint here
const GRAPHQL_ENDPOINT = process.env.EXPO_PUBLIC_GRAPHQL_URL || 'http://localhost:5000/graphql';

export const graphqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
  fetchOptions: () => ({
    headers: {
      'Content-Type': 'application/json',
    },
  }),
});

// Export mutations and queries for use in components
export { SIGN_IN_MUTATION, SIGN_UP_MUTATION, REFRESH_TOKEN_MUTATION };
