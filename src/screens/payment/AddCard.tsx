import React from 'react';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import CloseBtn from '../../components/CloseBtn';
import InputText from '../../components/Input/InputText';
import { Form } from 'react-hook-form';

const AddCard = () => {
  const {height} = Dimensions.get('window');

  return (
    <View style={{backgroundColor: 'white', height}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 40,
        }}>
        <CloseBtn />
        <Text
          style={{
            marginStart: 10,
            color: '#181C2E',
            fontSize: 17,
            fontWeight: 400,
            fontFamily: 'Sen',
          }}>
          Add Card
        </Text>
      </View>
      <View style = {{marginHorizontal: 20, }}>
        <InputText label='card holder name' textStyle={{color: '#A0A5BA', fontSize: 14,textTransform: 'uppercase',fontFamily: 'Sen'}} placeholder='Vishal Khadok' />
        <InputText label='Card number' textStyle={{color: '#A0A5BA', fontSize: 14,textTransform: 'uppercase',fontFamily: 'Sen', marginTop: 20}} placeholder='Vishal Khadok' />
      </View>
    </View>
  );
};

export default AddCard;
