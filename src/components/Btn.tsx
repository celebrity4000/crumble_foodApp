import React, { useRef } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface props {
  btnLabel: string,
  Press: any,
  style: any
}

const Btn:React.FC<props> = ({btnLabel, Press, style}) => { 

  return (
    <View style = {[{alignItems: 'center'}, style]}>
      <TouchableOpacity
        onPress={Press}
        style = {{
          backgroundColor: '#FF7622',
          borderRadius: 15,
          alignItems: 'center',
          width: "90%",
          paddingVertical: 20,
          marginVertical: 10,
        }}
        >
        <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Btn;
