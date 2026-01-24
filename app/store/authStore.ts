import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthUser, AuthToken } from '../types';

interface AuthState {
  user: AuthUser | null;
  tokens: AuthToken | null;
  isLoading: boolean;
  isSignedIn: boolean;
  
  // Actions
  setUser: (user: AuthUser | null) => void;
  setTokens: (tokens: AuthToken | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  signIn: (user: AuthUser, tokens: AuthToken) => void;
  signUp: (user: AuthUser, tokens: AuthToken) => void;
  signOut: () => void;
  updateTokens: (tokens: AuthToken) => void;
  bootstrapAsync: () => Promise<void>;
}

// Create a storage adapter that works on both web and native
const getStorage = () => {
  try {
    // Try to use AsyncStorage (works on native and web with proper setup)
    return createJSONStorage(() => AsyncStorage);
  } catch (e) {
    // Fallback to localStorage on web if AsyncStorage fails
    if (typeof window !== 'undefined' && window.localStorage) {
      return createJSONStorage(() => ({
        getItem: (key: string) => Promise.resolve(window.localStorage.getItem(key)),
        setItem: (key: string, value: string) => Promise.resolve(window.localStorage.setItem(key, value)),
        removeItem: (key: string) => Promise.resolve(window.localStorage.removeItem(key)),
      }));
    }
    // Fallback to no persistence
    return createJSONStorage(() => ({
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve(),
    }));
  }
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      tokens: null,
      isLoading: false,
      isSignedIn: false,

      // Actions
      setUser: (user) => set({ user, isSignedIn: !!user }),
      
      setTokens: (tokens) => set({ tokens }),
      
      setIsLoading: (isLoading) => set({ isLoading }),
      
      signIn: (user, tokens) => {
        set({ user, tokens, isSignedIn: true });
      },
      
      signUp: (user, tokens) => {
        set({ user, tokens, isSignedIn: true });
      },
      
      signOut: () => {
        set({ user: null, tokens: null, isSignedIn: false });
      },
      
      updateTokens: (tokens) => {
        set({ tokens });
      },
      
      bootstrapAsync: async () => {
        // No-op for now, persistence is handled by middleware
      },
    }),
    {
      name: 'auth-store',
      storage: getStorage() as any,
      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
      }),
    }
  )
);

// Export selectors for convenience
export const useUser = () => useAuthStore((state) => state.user);
export const useTokens = () => useAuthStore((state) => state.tokens);
export const useIsSignedIn = () => useAuthStore((state) => state.isSignedIn);
export const useIsLoading = () => useAuthStore((state) => state.isLoading);
export const useSignOut = () => useAuthStore((state) => state.signOut);
export const useUpdateTokens = () => useAuthStore((state) => state.updateTokens);
