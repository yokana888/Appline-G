import React, {useState, useEffect} from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image
  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SPLASH, LOGIN, REGISTER, DASHBOARD, HOME_NAVIGATOR } from "../../constants/routeName";
import Container from "../../components/common/Container";

// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component

const Splash = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      isUserLoggedIn = async() => {
        AsyncStorage.getItem('username').then((value) =>
            navigation.replace(value === null ? 'Auth' : 'DrawerNavigator' ));
      }
      isUserLoggedIn();
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/knitting.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});