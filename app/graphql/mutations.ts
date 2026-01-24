import gql from 'graphql-tag';

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      success
      message
      user {
        id
        email
        firstName
        lastName
        createdAt
      }
      token {
        accessToken
        refreshToken
        expiresIn
      }
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      success
      message
      user {
        id
        email
        firstName
        lastName
        createdAt
      }
      token {
        accessToken
        refreshToken
        expiresIn
      }
    }
  }
`;

export const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      success
      token {
        accessToken
        refreshToken
        expiresIn
      }
    }
  }
`;
