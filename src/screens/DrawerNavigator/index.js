// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import Dashboards from '../Dashboards'
import Sidebar from '../../components/common/Container/sidebar';
import Header from '../../components/common/Container/header';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Dashboards}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <Header navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'grey',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={Sidebar}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={homeScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;