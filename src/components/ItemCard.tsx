import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import plusIcon from '../assets/image/plus.png'

interface props {
    image: ImageSourcePropType,
    heading: string,
    resturantName: string,
    price: number
}

const ItemCard:React.FC <props> = ({image, heading, resturantName, price}) => {
  return (
    <View>
      <View style={{alignItems: 'center', top: 35, zIndex: 10}}>
        <Image
          source={image}
          style={{width: 122, height: 84, borderRadius: 10}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          paddingHorizontal: 12,
          paddingTop: 50,
          paddingBottom: 10,
          borderRadius: 15,
        }}>
        <Text style={{color: '#32343E', fontWeight: 700, fontSize: 15}}>
          {heading}
        </Text>
        <Text style={{color: '#646982', fontSize: 13}}>{resturantName}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#32343E', fontWeight: 700, fontSize: 16}}>
            $ {price}
          </Text>
          <View
            style={{
              backgroundColor: '#FF7622',
              width: 30,
              height: 30,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={plusIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;
