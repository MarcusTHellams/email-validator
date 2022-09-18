/* eslint-disable indent */
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** Check if the given email is valid */
  emailCheck?: Maybe<Scalars['Boolean']>;
  user: UserType;
};

export type QueryEmailCheckArgs = {
  email: Scalars['String'];
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  username: Scalars['String'];
};

export type EmailCheckQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type EmailCheckQuery = {
  __typename?: 'Query';
  emailCheck?: boolean | null;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'UserType';
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    imageUrl?: string | null;
  };
};

export const EmailCheckDocument = `
    query emailCheck($email: String!) {
  emailCheck(email: $email)
}
    `;
export const useEmailCheckQuery = <TData = EmailCheckQuery, TError = unknown>(
  client: GraphQLClient,
  variables: EmailCheckQueryVariables,
  options?: UseQueryOptions<EmailCheckQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<EmailCheckQuery, TError, TData>(
    ['emailCheck', variables],
    fetcher<EmailCheckQuery, EmailCheckQueryVariables>(
      client,
      EmailCheckDocument,
      variables,
      headers
    ),
    options
  );
export const GetUserDocument = `
    query getUser($id: String!) {
  user(id: $id) {
    id
    firstName
    lastName
    username
    email
    imageUrl
  }
}
    `;
export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  client: GraphQLClient,
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<GetUserQuery, TError, TData>(
    ['getUser', variables],
    fetcher<GetUserQuery, GetUserQueryVariables>(
      client,
      GetUserDocument,
      variables,
      headers
    ),
    options
  );
