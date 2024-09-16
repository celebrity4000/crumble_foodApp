import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/colors';
import {
  BackIcon,
  LeftLineIcon,
  LogoIcon,
  UpEllipseIcon,
} from '../../assets/svg/SvgIcons';
import InputText from '../../components/Input/InputText';
import PasswordInput from '../../components/Input/PasswordInput';

type FormData = {
  name: string;
  emailOrPhone: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const [onSignupClick, setOnSignupClick] = React.useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    getValues, // Extract getValues from useForm
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setOnSignupClick(true);
    console.log(data);
    setTimeout(() => {
      navigation.navigate('OTPVerify');
      setOnSignupClick(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}>
        <UpEllipseIcon style={{ position: 'absolute', top: 0, left: 0 }} />
        <LeftLineIcon style={{ position: 'absolute', top: 0, right: 0 }} />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <LogoIcon width={103} height={103} />
          <Text style={styles.logoText}>Sign up</Text>
          <Text style={styles.subtitleText}>Please sign up to get started</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 24 }}>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          rules={{ required: 'Name is required' }}
          render={({ field: { onChange, value } }) => (
            <View>
              <InputText
                label="NAME"
                placeholder="Name"
                value={value}
                onChangeText={onChange}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name.message}</Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="emailOrPhone"
          defaultValue=""
          rules={{
            required: 'Email or phone is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Enter a valid email address',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <View>
              <InputText
                label="EMAIL OR PHONE"
                placeholder="Email or Phone"
                value={value}
                onChangeText={onChange}
                textStyle={{ marginTop: 8 }}
              />
              {errors.emailOrPhone && (
                <Text style={styles.errorText}>
                  {errors.emailOrPhone.message}
                </Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <View>
              <PasswordInput
                label="PASSWORD"
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                textStyle={{ marginTop: 10 }}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          defaultValue=""
          rules={{
            required: 'Please confirm your password',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          }}
          render={({ field: { onChange, value } }) => (
            <View>
              <PasswordInput
                label="RE-TYPE PASSWORD"
                placeholder="Re-type Password"
                value={value}
                onChangeText={onChange}
                textStyle={{ marginTop: 10 }}
              />
              {errors.confirmPassword && (
                <Text style={styles.errorText}>
                  {errors.confirmPassword.message}
                </Text>
              )}
            </View>
          )}
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.loginButton}>
          {onSignupClick ?
            <View style={
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }
            }>
              <ActivityIndicator size="small" color={Colors.White} />
              <Text style={styles.loginButtonText}>Signing Up...</Text>
            </View> :
            <Text style={styles.loginButtonText}>Sign Up</Text>
          }
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.Orange,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.White,
    borderRadius: 40,
    top: 26,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '30%',
    transform: [{ translateX: 0 }],
  },
  logoText: {
    fontWeight: '700',
    fontSize: 30,
    color: Colors.White,
  },
  subtitleText: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors.White,
  },
  scrollView: {
    width: '100%',
    marginTop: 235,
    padding: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: Colors.White,
  },
  loginButton: {
    backgroundColor: Colors.Orange,
    height: 62,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
    marginBottom: 30,
  },
  loginButtonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Signup;
