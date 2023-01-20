// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import Dashboards from '../Dashboards';
import Proses from '../Proses';
import Line from '../Line';
import Shift from '../Shift';
import Sidebar from '../../components/common/Container/sidebar';
import Header from '../../components/common/Container/header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = ({navigation}) => {
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

const MasterScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MasterScreen"
        component={MasterBottomTabStack}
        options={{
          title: 'Master', //Set Header Title
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

const MasterBottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="ProsesScreen"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="ProsesScreen"
        component={Proses}
        options={{
          tabBarLabel: 'Proses',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="ShiftScreen"
        component={Shift}
        options={{
          tabBarLabel: 'Shift',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="LineScreen"
        component={Line}
        options={{
          tabBarLabel: 'Line',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
    </Tab.Navigator>
  );
}

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: 'grey',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },}}
      drawerContent={Sidebar}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="MasterScreenStack"
        options={{drawerLabel: 'Master'}}
        component={MasterScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;