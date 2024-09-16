import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Colors} from '../constants/colors';

const CustomOTPFleld = ({onChange, value, page}: any) => {
  const navigation = useNavigation();

  const pin1ref = useRef<TextInput>(null);
  const pin2ref = useRef<TextInput>(null);
  const pin3ref = useRef<TextInput>(null);
  const pin4ref = useRef<TextInput>(null);

  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [otp, setOtp] = useState('');

  const handlePinChange = (pinIndex: any, text: any) => {
    const updatedValue = value.split('');
    updatedValue[pinIndex] = text;
    onChange(updatedValue.join(''));

    if (text.length === 1) {
      if (pinIndex === 0) pin2ref.current?.focus();
      if (pinIndex === 1) pin3ref.current?.focus();
      if (pinIndex === 2) pin4ref.current?.focus();
    } else if (text.length === 0) {
      if (pinIndex === 1) pin1ref.current?.focus();
      if (pinIndex === 2) pin2ref.current?.focus();
      if (pinIndex === 3) pin3ref.current?.focus();
    }

    // Trigger navigation if all 4 digits are entered
    if (updatedValue.join('').length === 4 && page) {
      console.log(text);
      setTimeout(() => {
        navigation.navigate(page);
      }, 2000);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 26,
          width: '100%',
          paddingVertical: 50,
        }}>
        <View
          style={[
            styles.TextInputView,
            {borderColor: isFocused1 ? Colors.Orange : Colors.LightGray},
          ]}>
          <TextInput
            ref={pin1ref}
            style={styles.TextInputText}
            keyboardType="number-pad"
            maxLength={1}
            value={value[0] || ''}
            selectionColor={Colors.Orange}
            onFocus={() => setIsFocused1(true)}
            onBlur={() => setIsFocused1(false)}
            onChangeText={e => handlePinChange(0, e)}
          />
        </View>
        <View
          style={[
            styles.TextInputView,
            {borderColor: isFocused2 ? Colors.Orange : Colors.LightGray},
          ]}>
          <TextInput
            ref={pin2ref}
            style={styles.TextInputText}
            keyboardType="number-pad"
            maxLength={1}
            value={value[1] || ''}
            selectionColor={Colors.Orange}
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            onChangeText={e => handlePinChange(1, e)}
          />
        </View>
        <View
          style={[
            styles.TextInputView,
            {borderColor: isFocused3 ? Colors.Orange : Colors.LightGray},
          ]}>
          <TextInput
            ref={pin3ref}
            style={styles.TextInputText}
            keyboardType="number-pad"
            maxLength={1}
            value={value[2] || ''}
            selectionColor={Colors.Orange}
            onFocus={() => setIsFocused3(true)}
            onBlur={() => setIsFocused3(false)}
            onChangeText={e => handlePinChange(2, e)}
          />
        </View>
        <View
          style={[
            styles.TextInputView,
            {borderColor: isFocused4 ? Colors.Orange : Colors.LightGray},
          ]}>
          <TextInput
            ref={pin4ref}
            style={styles.TextInputText}
            keyboardType="number-pad"
            maxLength={1}
            value={value[3] || ''}
            selectionColor={Colors.Orange}
            onFocus={() => setIsFocused4(true)}
            onBlur={() => setIsFocused4(false)}
            onChangeText={e => handlePinChange(3, e)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  TextInputView: {
    backgroundColor: Colors.White,
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  TextInputText: {
    fontSize: 20,
    padding: 10,
    color: Colors.Orange,
    textAlign: 'center',
  },
});

export default CustomOTPFleld;
