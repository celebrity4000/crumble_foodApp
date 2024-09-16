import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Btn from '../../components/Btn';
import {Colors} from '../../constants/colors';
import successImg from '../../assets/image/success.png';

const Successfull = () => {
  const {height} = Dimensions.get('window');

  return (
    <View style={{height, display: 'flex', justifyContent: 'space-between', backgroundColor: 'white'}}>
      <View
        style={{
          alignItems: 'center',
          height: '55%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <Image
          source={successImg}
          alt="success"
          style={{height: 150, width: 150}}
        />
      </View>
      <View style={{height: '20%'}}>
        <Text
          style={{
            color: Colors.DarkBlue,
            fontSize: 24,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 15,
          }}>
          Congratulations!
        </Text>
        <Text style={{fontSize: 14, lineHeight: 24, textAlign: 'center'}}>
          You successfully maked a payment, {'\n'} enjoy our service!
        </Text>
      </View>
      <Btn btnLabel="Track Order" Press={() => {}} style={{marginBottom: 30}} />
    </View>
  );
};

export default Successfull;
