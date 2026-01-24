import React, { useState } from 'react';
import { View, ScrollView, Text, Alert, TextStyle, ViewStyle } from 'react-native';
import { useFormik } from 'formik';
import { useSignUp } from '../../hooks/useAuth';
import { signUpValidationSchema } from '../../utils/validationSchemas';
import { COLORS, SPACING, TYPOGRAPHY } from '../../styles/constants';
import MainHeading from '../../components/headings/MainHeading';
import FormInput from '../../components/common/FormInput';
import TextButton from '../../components/buttons/TextButton';

interface SignUpScreenProps {
  navigation?: any;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { mutate: signUp, isPending } = useSignUp();
  const [generalError, setGeneralError] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      setGeneralError('');
      signUp(values, {
        onSuccess: (data) => {
          if (data.success) {
            Alert.alert('Success', 'Account created successfully!');
            // Navigate to main page after successful sign up
            navigation?.replace('MainPage');
          } else {
            setGeneralError(data.message || 'Sign up failed');
          }
        },
        onError: (error: any) => {
          setGeneralError(error.message || 'An error occurred during sign up');
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
    paddingTop: SPACING.xl3,
  };

  const headerStyle: ViewStyle = {
    marginBottom: SPACING.xl2,
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
          <MainHeading text="Create Account" />
          <Text style={subTextStyle}>Join us today</Text>
        </View>

        {generalError && (
          <View style={errorBoxStyle}>
            <Text style={errorTextStyle}>{generalError}</Text>
          </View>
        )}

        <FormInput
          label="First Name"
          placeholder="John"
          value={formik.values.firstName}
          onChangeText={formik.handleChange('firstName')}
          error={formik.touched.firstName ? formik.errors.firstName : undefined}
        />

        <FormInput
          label="Last Name"
          placeholder="Doe"
          value={formik.values.lastName}
          onChangeText={formik.handleChange('lastName')}
          error={formik.touched.lastName ? formik.errors.lastName : undefined}
        />

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
          placeholder="Create a password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          error={formik.touched.password ? formik.errors.password : undefined}
          secureTextEntry
        />

        <FormInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange('confirmPassword')}
          error={formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}
          secureTextEntry
        />

        <TextButton
          title="Create Account"
          onPress={() => formik.handleSubmit()}
          loading={isPending}
          style={{ marginTop: SPACING.xl2 }}
        />

        <View style={linkContainerStyle}>
          <Text style={linkTextStyle}>Already have an account? </Text>
          <Text
            style={[linkTextStyle, { color: COLORS.blue, fontWeight: TYPOGRAPHY.fontWeights.semibold }]}
            onPress={() => navigation?.navigate('SignIn')}
          >
            Sign in
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
