// Auth Types
export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: AuthToken;
  success: boolean;
  message?: string;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

// Navigation Types
export type RootStackParamList = {
  Home: undefined;
  MainPage: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Services: undefined;
  Profile: undefined;
};

export interface NavigationProps {
  navigation?: any;
  route?: any;
}

// API Response Types
export interface GraphQLError {
  message: string;
  extensions?: {
    code: string;
    exception?: any;
  };
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}
