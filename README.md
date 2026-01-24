# Services App Expo

A React Native Expo application for plumbing services with authentication, built with TypeScript, Formik, TanStack Query, and GraphQL.

## Features

- Responsive mobile UI similar to services-landing
- Main page with services and features
- Sign-in and Sign-up pages with Formik validation
- GraphQL integration with TanStack Query
- Authentication logic
- Glass-morphism UI components
- Cyan and dark-teal color scheme

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── buttons/        # Button components
│   ├── headings/       # Heading components
│   ├── cards/          # Card components
│   └── svg/            # SVG icons
├── layouts/            # Layout components (Header, Footer)
├── screens/            # Screen/Page components
├── features/           # Feature-specific components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Styling utilities
├── graphql/            # GraphQL queries and mutations
├── constants/          # Constants
├── types/              # TypeScript type definitions
└── App.tsx            # Root component
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
# Start the development server
npm start

# For iOS
npm run ios

# For Android
npm run android

# For Web
npm run web
```

## Technologies Used

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **Formik** - Form management
- **Yup** - Form validation
- **TanStack Query** - Server state management
- **URQL** - GraphQL client
- **React Navigation** - Navigation
- **Expo Linear Gradient** - Gradient backgrounds

## Project Structure Details

### Components

- **Buttons**: TextButton, BurgerMenuButton
- **Headings**: MainHeading, SubHeading, Label
- **Cards**: GlassCard
- **SVG**: Service icons, menu icons

### Pages

- **Main** - Home page with features and services
- **Sign In** - Authentication with Formik
- **Sign Up** - Registration with Formik
- **Services** - Services listing

### GraphQL

GraphQL queries and mutations for:
- User authentication
- User registration
- User profile
- Services listing

## Styling

The app uses a style utility system similar to the original Next.js project:
- Spacing utilities
- Color variables
- Glass morphism effects
- Responsive breakpoints

## API Integration

The app integrates with a GraphQL API for:
- User sign in/up
- Authentication tokens
- User data management

Configure your GraphQL endpoint in the environment variables.

## License

MIT
