import { useMutation } from '@tanstack/react-query';
import { SignInInput, SignUpInput, AuthResponse } from '../types';
import { useAuthStore } from '../store/authStore';

export const useSignIn = () => {
  const { signIn } = useAuthStore();

  return useMutation({
    mutationFn: async (input: SignInInput): Promise<AuthResponse> => {
      // For now, return a mock response
      // Replace with actual GraphQL call when backend is ready
      return {
        success: true,
        user: {
          id: 'user-1',
          email: input.email,
          firstName: 'John',
          lastName: 'Doe',
          createdAt: new Date().toISOString(),
        },
        token: {
          accessToken: 'mock-token',
          refreshToken: 'mock-refresh',
          expiresIn: 3600,
        },
        message: 'Signed in successfully',
      };
    },
    onSuccess: (data) => {
      if (data.success && data.user && data.token) {
        signIn(data.user, data.token);
      }
    },
  });
};

export const useSignUp = () => {
  const { signUp } = useAuthStore();

  return useMutation({
    mutationFn: async (input: SignUpInput): Promise<AuthResponse> => {
      // For now, return a mock response
      // Replace with actual GraphQL call when backend is ready
      return {
        success: true,
        user: {
          id: 'user-' + Math.random(),
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
          createdAt: new Date().toISOString(),
        },
        token: {
          accessToken: 'mock-token',
          refreshToken: 'mock-refresh',
          expiresIn: 3600,
        },
        message: 'Account created successfully',
      };
    },
    onSuccess: (data) => {
      if (data.success && data.user && data.token) {
        signUp(data.user, data.token);
      }
    },
  });
};
