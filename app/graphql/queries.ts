export const SIGN_IN_MUTATION = `
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
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

export const SIGN_UP_MUTATION = `
  mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signUp(input: { 
      email: $email, 
      password: $password, 
      firstName: $firstName, 
      lastName: $lastName 
    }) {
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

export const GET_USER_QUERY = `
  query GetUser {
    user {
      id
      email
      firstName
      lastName
      createdAt
    }
  }
`;

export const GET_SERVICES_QUERY = `
  query GetServices {
    services {
      id
      title
      description
      icon
    }
  }
`;

export const REFRESH_TOKEN_MUTATION = `
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

export const LOGOUT_MUTATION = `
  mutation Logout {
    logout {
      success
      message
    }
  }
`;
