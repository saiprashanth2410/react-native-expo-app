# Zustand State Management Architecture

## Migration from Context API to Zustand

This project has successfully replaced React Context API with Zustand for state management. Here's the complete architecture:

## Why Zustand?

✅ **Simpler API** - No wrapper components or hooks
✅ **Better Performance** - Granular subscriptions prevent unnecessary re-renders  
✅ **Less Boilerplate** - No actions, reducers, or providers needed
✅ **TypeScript Support** - Full type safety with minimal effort
✅ **Smaller Bundle** - ~1KB vs Context overhead

## Store Structure

### authStore.ts
The central authentication store managing:

```typescript
interface AuthState {
  // State
  user: AuthUser | null
  tokens: AuthToken | null
  isLoading: boolean
  isSignedIn: boolean
  
  // Actions
  setUser(user)
  setTokens(tokens)
  signIn(user, tokens)
  signUp(user, tokens)
  signOut()
  updateTokens(tokens)
  bootstrapAsync()
}
```

## Usage Patterns

### Pattern 1: Full Store Access
```typescript
import { useAuthStore } from '@/app/store/authStore'

const MyComponent = () => {
  const { user, isSignedIn, signOut } = useAuthStore()
  // All store subscribers re-render when ANY state changes
}
```

### Pattern 2: Selectors (Recommended)
```typescript
import { useUser, useIsSignedIn } from '@/app/store'

const MyComponent = () => {
  const user = useUser()  // Only re-renders when user changes
  const isSignedIn = useIsSignedIn()  // Only re-renders when isSignedIn changes
  // More efficient!
}
```

### Pattern 3: Direct State Access
```typescript
import { useAuthStore } from '@/app/store/authStore'

// Outside components
const state = useAuthStore.getState()
console.log(state.user, state.tokens)
```

## Integration with React Query

The `useAuth` hooks combine Zustand + React Query:

```typescript
const { mutate: signIn, isPending } = useSignIn()

signIn(credentials, {
  onSuccess: (data) => {
    // Zustand automatically updates user/tokens
    // No need to manually dispatch actions
  }
})
```

## Persistence Layer

Zustand's persist middleware automatically:
- **Saves** user & tokens to AsyncStorage
- **Hydrates** store from AsyncStorage on app launch
- **Syncs** across tabs/instances (web)

```typescript
persist(
  (set, get) => ({ ... }),
  {
    name: 'auth-store',
    storage: createJSONStorage(() => AsyncStorage),
    partialize: (state) => ({
      user: state.user,
      tokens: state.tokens,
    })
  }
)
```

## Adding New Stores

### Example: User Preferences Store

```typescript
// app/store/preferencesStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface PreferencesState {
  theme: 'light' | 'dark'
  language: string
  setTheme: (theme: 'light' | 'dark') => void
  setLanguage: (lang: string) => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'preferences-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export const useTheme = () => usePreferencesStore((state) => state.theme)
export const useLanguage = () => usePreferencesStore((state) => state.language)
```

### Usage
```typescript
import { useTheme, usePreferencesStore } from '@/app/store'

const MyComponent = () => {
  const theme = useTheme()
  const { setTheme } = usePreferencesStore()
  
  return (
    <TouchableOpacity onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Text>Toggle theme</Text>
    </TouchableOpacity>
  )
}
```

## Comparison Matrix

| Feature | Context API | Zustand |
|---------|------------|---------|
| Wrapper Component | Required | Not needed |
| Hook Usage | useContext + manual | Direct hook |
| Performance | Can cause over-renders | Granular updates |
| TypeScript | Works | Excellent |
| Bundle Size | Medium | ~1KB |
| Middleware | Limited | Powerful |
| Learning Curve | Moderate | Very low |

## Best Practices

✅ **Use Selectors** - Minimize component re-renders
✅ **Separate Stores** - One store per domain (auth, preferences, ui)
✅ **Type Everything** - Full TypeScript support
✅ **Export Selectors** - Create convenience hooks
✅ **Keep Stores Pure** - Side effects go in hooks/mutations
✅ **Use Middleware** - For persistence, devtools, etc.

## Migration Checklist

- [x] Replaced Context API with Zustand
- [x] Added persist middleware for AsyncStorage
- [x] Created selector hooks for efficiency
- [x] Updated authentication hooks
- [x] Integrated with React Query
- [x] Added TypeScript types
- [x] Tested state persistence
- [ ] Add dev-only devtools middleware (optional)
