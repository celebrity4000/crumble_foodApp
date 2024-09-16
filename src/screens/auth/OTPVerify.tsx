import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import CustomOTPFleld from '../../components/CustomOTPFleld';
import { Colors } from '../../constants/colors';

type FormData = {
  otp: string;
};

const OTPVerify = () => {
  const [email, setEmail] = React.useState('prelookstudio@gmail.com');
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 170,
            height: 170,
            borderRadius: 170,
            backgroundColor: Colors.Orange,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: -100,
            left: 0,
            width: 170,
            height: 170,
            borderRadius: 170,
            backgroundColor: Colors.JasmineYellow,
            zIndex: 10,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: -40,
            left: -40,
            width: 96,
            height: 96,
            borderRadius: 96,
            backgroundColor: Colors.Orange,
          }}
        />
        <View style={{ top: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              backgroundColor: Colors.White,
              borderRadius: 10,
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              shadowColor: '#000',
              shadowOffset: { width: 2, height: 3 },
              shadowOpacity: 0.5,
              shadowRadius: 3.84,
              elevation: 5, // For Android
              left: 10,
            }}
          >
            <Image source={require('../../assets/image/Backarrow.png')} />
          </TouchableOpacity>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Image
              source={require('../../assets/image/crumble.png')}
              style={{ width: 103, height: 103 }}
            />
            <View
              style={{
                alignItems: 'flex-start',
                width: '100%',
                paddingHorizontal: 26,
              }}
            >
              <Text style={{ color: 'black', fontWeight: '700', fontSize: 37 }}>
                Verification Code
              </Text>
              <Text
                style={{
                  color: Colors.Manatee,
                  fontWeight: '400',
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                Please type the verification code sent to
              </Text>
              <Text
                style={{
                  color: Colors.Manatee,
                  fontWeight: '400',
                  fontSize: 14,
                  marginTop: 6,
                }}
              >
                {email}
              </Text>
            </View>

            <Controller
              control={control}
              name="otp"
              defaultValue=""
              rules={{ required: 'OTP is required' }}
              render={({ field: { onChange, value } }) => (
                <CustomOTPFleld
                  onChange={onChange}
                  value={value || ""}
                  page="Location" // Ensure page is a valid string
                />
              )}
            />

            {errors.otp && (
              <Text style={styles.errorText}>{errors.otp.message}</Text>
            )}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.DavyGrey }}>
                I don't receive a code!{' '}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.Orange,
                    fontSize: 16,
                    fontWeight: '700',
                  }}
                >
                  Please resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 8,
  },
});

export default OTPVerify;
