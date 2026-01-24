import React, { useState } from 'react';
import { View, ScrollView, Text, Alert, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useFormik } from 'formik';
import { useSignIn } from '../../hooks/useAuth';
import { signInValidationSchema } from '../../utils/validationSchemas';
import { COLORS, SPACING, TYPOGRAPHY } from '../../styles/constants';
import MainHeading from '../../components/headings/MainHeading';
import FormInput from '../../components/common/FormInput';
import TextButton from '../../components/buttons/TextButton';

interface SignInScreenProps {
  navigation?: any;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { mutate: signIn, isPending } = useSignIn();
  const [generalError, setGeneralError] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInValidationSchema,
    onSubmit: (values) => {
      setGeneralError('');
      signIn(values, {
        onSuccess: (data) => {
          if (data.success) {
            Alert.alert('Success', 'Signed in successfully!');
            // Navigate to home screen after successful sign in
            navigation?.replace('MainPage');
          } else {
            setGeneralError(data.message || 'Sign in failed');
          }
        },
        onError: (error: any) => {
          setGeneralError(error.message || 'An error occurred during sign in');
        },
      });
    },
  });

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: COLORS.pageBg,
  };

  const contentStyle: ViewStyle = {
    flexGrow: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
  };

  const headerStyle: ViewStyle = {
    marginBottom: SPACING.xl3,
    alignItems: 'center',
  };

  const subTextStyle: TextStyle = {
    fontSize: TYPOGRAPHY.fontSizes.base,
    color: COLORS.darkTeal,
    marginTop: SPACING.md,
    textAlign: 'center',
  };

  const errorBoxStyle: ViewStyle = {
    backgroundColor: '#ffebee',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.red,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    borderRadius: 4,
  };

  const errorTextStyle: TextStyle = {
    color: COLORS.red,
    fontSize: TYPOGRAPHY.fontSizes.base,
    fontWeight: TYPOGRAPHY.fontWeights.semibold,
  };

  const linkContainerStyle: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.lg,
  };

  const linkTextStyle: TextStyle = {
    color: COLORS.darkTeal,
    fontSize: TYPOGRAPHY.fontSizes.base,
  };

  return (
    <View style={containerStyle}>
      <ScrollView contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
        <View style={headerStyle}>
          <MainHeading text="Welcome Back" />
          <Text style={subTextStyle}>Sign in to your account</Text>
        </View>

        {generalError && (
          <View style={errorBoxStyle}>
            <Text style={errorTextStyle}>{generalError}</Text>
          </View>
        )}

        <FormInput
          label="Email"
          placeholder="your@email.com"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          error={formik.touched.email ? formik.errors.email : undefined}
          keyboardType="email-address"
        />

        <FormInput
          label="Password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          error={formik.touched.password ? formik.errors.password : undefined}
          secureTextEntry
        />

        <TextButton
          title="Sign In"
          onPress={() => formik.handleSubmit()}
          loading={isPending}
          style={{ marginTop: SPACING.xl2 }}
        />

        <View style={linkContainerStyle}>
          <Text style={linkTextStyle}>Don't have an account? </Text>
          <Text
            style={[linkTextStyle, { color: COLORS.blue, fontWeight: TYPOGRAPHY.fontWeights.semibold }]}
            onPress={() => navigation?.navigate('SignUp')}
          >
            Sign up
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;
