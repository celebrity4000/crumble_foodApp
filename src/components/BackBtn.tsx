import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import backBtn from '../assets/image/Backarrow.png';

interface props {
  backgroundColor?: string,
}

const BackBtn: React.FC<props> = ({backgroundColor}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: 45,
        height: 45,
        backgroundColor: `${(backgroundColor)? backgroundColor : '#0000000d'}` ,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        shadowColor: '#000',
      }}>
      <Image source={backBtn} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackBtn;
