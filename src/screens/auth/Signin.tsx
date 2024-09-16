import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import {
  AppleIcon,
  FacebookIcon,
  LeftLineIcon,
  LogoIcon,
  TwitterIcon,
  UpEllipseIcon,
} from '../../assets/svg/SvgIcons';
import { Colors } from '../../constants/colors';
import PasswordInput from '../../components/Input/PasswordInput';
import InputText from '../../components/Input/InputText';

type FormData = {
  emailOrPhone: string;
  password: string;
};

const Signin = () => {
  const [onSignInClick, setOnSignInClick] = React.useState(false);
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setOnSignInClick(true);
    console.log(data);
    // Perform login action here, then navigate to Home
    setTimeout(() => {
      navigation.navigate('Home');
      setOnSignInClick(false);
    }, 3000)
  };

  const images = [
    { id: 1, icon: <FacebookIcon /> },
    { id: 2, icon: <TwitterIcon /> },
    { id: 3, icon: <AppleIcon /> },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View>
        <UpEllipseIcon style={{ position: 'absolute', top: 0, left: 0 }} />
        <LeftLineIcon style={{ position: 'absolute', top: 0, right: 0 }} />
        <View style={styles.logoContainer}>
          <LogoIcon width={103} height={103} />
          <Text style={styles.logoText}>Log in</Text>
          <Text style={styles.subtitleText}>
            Please sign in to your existing account
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="emailOrPhone"
          rules={{
            required: 'Email or phone is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Enter a valid email address',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <InputText
              label="Email or Phone"
              placeholder="Email or Phone"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.emailOrPhone && (
          <Text style={styles.errorText}>{errors.emailOrPhone.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              label="Password"
              placeholder="Password"
              textStyle={{
                marginTop: 10,
              }}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit(onSubmit)}>
          {onSignInClick ?
            <View style={
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }
            }>
              <ActivityIndicator size="small" color={Colors.White} />
              <Text style={styles.loginButtonText}>LOGGING IN...</Text>
            </View> :
            <Text style={styles.loginButtonText}>LOG IN</Text>
          }
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={{ color: Colors.ShadowBlue }}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{
              color: Colors.Orange,
              fontWeight: 'bold',
            }} >SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Or</Text>

        <View style={styles.socialIconsContainer}>
          {images.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.socialIcon}>
              {item.icon}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.Orange,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '10%',
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
  formContainer: {
    flex: 1,
    width: '100%',
    marginTop: 50,
    padding: 24,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: Colors.White,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: Colors.Orange,
  },
  loginButton: {
    backgroundColor: Colors.Orange,
    height: 62,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
  },
  loginButtonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 38,
  },
  signUpText: {
    color: Colors.Orange,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginTop: 27,
    color: Colors.ShadowBlue,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
  },
  socialIcon: {
    padding: 6,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.AliceBlue,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
});

export default Signin;
