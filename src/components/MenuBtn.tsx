import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import menu from '../assets/image/More.png'

interface props {
    backgroundColor?: string,
  }

const MenuBtn:React.FC<props> = ({backgroundColor}) => {
  return (
    <TouchableOpacity
      // onPress={() => navigation.goBack()}
      style={{
        width: 45,
        height: 45,
        backgroundColor: `${(backgroundColor)? backgroundColor : '#0000000d'}` ,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        shadowColor: '#000',
        // marginHorizontal: 25
      }}>
      <Image source={menu} style = {{width:18, height: 4}}/>
    </TouchableOpacity>
  )
}

export default MenuBtn