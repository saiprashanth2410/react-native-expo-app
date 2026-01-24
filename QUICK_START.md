# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd /Users/oleksiichalyi/last-projects/react-native-expo-app
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

This will start the Expo development server. You'll see a QR code and options to:
- **iOS**: Press `i` to open iOS Simulator
- **Android**: Press `a` to open Android Emulator
- **Web**: Press `w` to open web browser

### Step 3: Test the App

#### Main Screen (Home Page)
- Launch the app
- See the hero section with "Reliable Plumber Services"
- Browse 4 services with descriptions
- View service categories

#### Sign Up Flow
1. Click "Request a Quote" button
2. Fill in all fields:
   - First Name
   - Last Name
   - Email
   - Password (8+ chars, uppercase, number)
   - Confirm Password
3. Submit (will fail without backend, but form validates correctly)

#### Sign In Flow
1. Click "Request Service" or sign up link
2. Enter email and password
3. Submit (will fail without backend)

## ⚙️ Configuration

### Set GraphQL Endpoint
Edit `app/graphql/client.ts`:
```typescript
const GRAPHQL_ENDPOINT = 'http://localhost:5000/graphql';
```

Or use environment variable:
```bash
EXPO_PUBLIC_GRAPHQL_URL=http://your-backend.com/graphql npm start
```

## 📱 Screens

### 1. MainScreen
- **Path**: `app/screens/main/MainScreen.tsx`
- **Features**:
  - Hero section
  - Service cards
  - Service categories
  - CTAs to auth screens

### 2. SignInScreen  
- **Path**: `app/screens/auth/SignInScreen.tsx`
- **Features**:
  - Email/password form
  - Real-time validation
  - Error handling
  - Link to sign up

### 3. SignUpScreen
- **Path**: `app/screens/auth/SignUpScreen.tsx`
- **Features**:
  - Full registration form
  - Password strength validation
  - Confirm password matching
  - Link to sign in

## 🎨 Customize

### Change Colors
Edit `app/styles/constants.ts`:
```typescript
export const COLORS = {
  darkTeal: '#00243A',  // Primary color
  cyan: '#00FFFF',      // Accent color
  blue: '#005CAD',      // Headings
  // ... more colors
}
```

### Modify Services
Edit `app/features/FeaturesBlockData.ts`:
```typescript
export const SERVICES_DATA = [
  {
    id: '1',
    title: 'Your Service',
    description: 'Service description...',
  },
  // Add more...
]
```

### Update Validation Rules
Edit `app/utils/validationSchemas.ts`:
```typescript
export const signUpValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  // ... modify rules
})
```

## 🔗 API Integration

### Connect to Your GraphQL Backend

1. **Backend must support**:
   - `signIn` mutation
   - `signUp` mutation
   - Return: `{ success, message, user, token }`

2. **Example Mutation Response**:
```json
{
  "data": {
    "signIn": {
      "success": true,
      "message": "Signed in successfully",
      "user": {
        "id": "user-123",
        "email": "user@example.com",
        "firstName": "John",
        "lastName": "Doe"
      },
      "token": {
        "accessToken": "jwt-token",
        "refreshToken": "refresh-token",
        "expiresIn": 3600
      }
    }
  }
}
```

3. **User data auto-saves** to:
   - Zustand store (in-memory)
   - AsyncStorage (persistent)

## 🧪 Test Form Validation

### Sign Up Form Tests
```
✅ Valid: john.doe@example.com / Password123
❌ Invalid email: not-an-email / Password123
❌ Password too short: user@test.com / Pass1
❌ No uppercase: user@test.com / password123
❌ No number: user@test.com / Password
❌ Passwords don't match: user@test.com / Password1 / Password2
```

### Sign In Form Tests
```
✅ Valid: john.doe@example.com / Password
❌ Invalid email: not-an-email / Password
❌ Password too short: user@test.com / Pass
```

## 📊 Project Structure Overview

```
app/
├── components/          # UI components
│   ├── buttons/
│   ├── cards/
│   ├── headings/
│   └── common/
├── screens/            # App screens
│   ├── main/
│   └── auth/
├── store/              # Zustand state (replaces Context)
├── hooks/              # Custom React hooks
├── graphql/            # GraphQL client & mutations
├── navigation/         # React Navigation config
├── features/           # Feature data
├── styles/             # Design system
├── types/              # TypeScript types
└── utils/              # Utilities (validation, etc)
```

## 🐛 Debugging

### View Store State
```typescript
import { useAuthStore } from '@/app/store/authStore'

// In component
console.log(useAuthStore.getState())

// Or use selector
const user = useUser()
console.log(user)
```

### Check Network Requests
```typescript
// In app/graphql/client.ts
const graphqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
  fetchOptions: () => ({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Add if needed
    },
  }),
})
```

### Form Errors
- Check Formik touched fields
- Verify Yup schema validation
- Look at FormInput component error display

## ⚡ Performance Tips

1. **Use Selectors** instead of full store:
   ```typescript
   // ❌ Slower
   const { user, tokens, isSignedIn } = useAuthStore()
   
   // ✅ Faster
   const user = useUser()
   const isSignedIn = useIsSignedIn()
   ```

2. **Memoize Components**:
   ```typescript
   import { memo } from 'react'
   const MyComponent = memo(({ data }) => ...)
   ```

3. **Lazy Load Screens**:
   - Already done with Stack Navigator

## 📚 Learn More

- **Zustand State Management**: See `ARCHITECTURE.md`
- **Project Structure**: See `PROJECT_STRUCTURE.md`  
- **Features Overview**: See `FEATURES_SUMMARY.md`

## ❓ Common Issues

### "Cannot find module"
- Run `npm install`
- Check import paths use `@/` for absolute imports

### Forms don't submit
- Verify GraphQL endpoint is correct
- Check backend is running
- Look at network errors in console

### Token not persisting
- Check AsyncStorage initialization
- Verify Zustand persist middleware
- Check device storage permissions

### Validation not working
- Verify Yup schema in `validationSchemas.ts`
- Check Formik touched fields logic
- Test with valid/invalid data

## 🎯 Next Steps

1. **Deploy backend** to handle auth mutations
2. **Test authentication flows** with real data
3. **Customize services** for your use case
4. **Add more screens** (profile, booking, etc.)
5. **Implement push notifications**
6. **Add image uploads**
7. **Set up analytics**

## 📞 Support

For detailed information:
- Check documentation files in project root
- Review component comments
- Test with the Expo DevTools

Happy coding! 🚀
