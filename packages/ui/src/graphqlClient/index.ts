import fetch from 'cross-fetch';
import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_API,
  { fetch }
);
