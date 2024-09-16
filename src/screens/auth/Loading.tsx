import React, {useEffect} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {LogoIcon} from '../../assets/svg/SvgIcons';

const LoaderScreen = ({navigation}:any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Signin');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <LogoIcon width={327} height={327} style={styles.image} />
      <Image
        source={require('../../assets/image/ellipse.png')}
        style={styles.ellipse}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE8A01',
  },
  image: {
    width: 327,
    height: 327,
    resizeMode: 'contain',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipse: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    // top: -200,
    // zIndex: 100,
  },
});

export default LoaderScreen;
