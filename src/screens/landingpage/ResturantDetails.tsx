import React from 'react';
import {View, StatusBar, Image, Dimensions, Text, ScrollView} from 'react-native';
import resturant from '../../assets/image/resturant_1.png';
import BackBtn from '../../components/BackBtn';
import MenuBtn from '../../components/MenuBtn';

const ResturantDetails = () => {
  const {height, width} = Dimensions.get('window');

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style = {{height: 320}}>
        <Image
          source={resturant}
          style={{height: 300, objectFit: 'cover', width, position: 'absolute'}}
        />
        <View
          style={{
            position: 'relative',
            top: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 25,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <BackBtn backgroundColor="white" />
            <Text
              style={{
                color: 'white',
                marginLeft: 30,
                fontSize: 17,
                fontWeight: '400',
              }}>
              Resturant View
            </Text>
          </View>
          <MenuBtn backgroundColor="white" />
        </View>
      </View>

      <ScrollView style = {{marginHorizontal: 20}}>
        <Text style = {{fontSize: 20, fontFamily: 'Sen', fontWeight: '700', color: '#181c2e'}}>Spicy Restaurant</Text>
        <Text style = {{fontSize: 14, fontWeight: 400, lineHeight: 24, marginTop: 10, fontFamily: 'Sen'}}>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Text>

        <View>
          <View style = {{flexDirection: 'row'}}>
              <Image source={}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResturantDetails;
