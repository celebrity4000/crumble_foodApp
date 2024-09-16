import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import closeImg from '../assets/image/close.png';

const CloseBtn = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ECF0F4',
        height: 45,
        width: 45,
        borderRadius: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={closeImg}
        alt="close image"
        style={{height: 15, width: 15}}
      />
    </TouchableOpacity>
  );
};

export default CloseBtn;
