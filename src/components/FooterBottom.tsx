import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import navigation from '../assets/image/navigation.png';
import location from '../assets/image/location_light.png';
import store from '../assets/image/store.png';
import like from '../assets/image/like.png';
import bell from '../assets/image/bell_light.png';
import {Colors} from '../constants/colors';

const FooterBottom = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.White,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Image source={navigation} style={{width: 30, height: 30}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={location} style={{width: 30, height: 30}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={store} style={{width: 24, height: 24}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={like} style={{width: 30, height: 30}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={bell} style={{width: 30, height: 30}} />
      </TouchableOpacity>
    </View>
  );
};

export default FooterBottom;
