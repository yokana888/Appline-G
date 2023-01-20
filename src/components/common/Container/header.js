// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const Header = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image 
          source={require('../../../assets/image/menu.png')}
          style={{width: '50%',
          height: 100,
          resizeMode: 'contain',
          margin: 30}} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;