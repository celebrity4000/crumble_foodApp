import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../constants/colors';
import LocationSvg from '../../assets/svg/locationSvg.svg';
import MapPin from '../../assets/svg/MapPin.svg';
const Location = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.White,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
      }}>
      <LocationSvg width={322} height={322} />

      <TouchableOpacity
        onPress={() => navigation.navigate('SigninSuccess')}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Access location</Text>
        <MapPin />
      </TouchableOpacity>
      <Text style={{textAlign: 'center', marginTop: 20, color: '#646982'}}>
        CRUMBLE WILL ACCESS YOUR
      </Text>
      <Text style={{textAlign: 'center', color: '#646982'}}>
        LOCATION ONLY WHILE USING THE APP
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    backgroundColor: Colors.Orange,
    // height: 50,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 31,
  },
  loginButtonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Location;
