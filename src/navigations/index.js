import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import DrawerNavigator from '../screens/DrawerNavigator';

const Stack = createStackNavigator();

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
};
  
const AppNavContainer = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
            name="SplashScreen"
            component={Splash}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
        />
          {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
        />
          {/* Navigation Drawer as a landing page */}
        </Stack.Navigator>
      </NavigationContainer>
    );
};
  
export default AppNavContainer;

// const AppNavContainer = () => {

//     // const [isLoggedIn, setIsLoggedIn] = useState(false);

//     // useEffect(() => {
//     //     isUserLoggedIn = async() => {

//     //         AsyncStorage.getItem('username').then((value) => {
//     //             if (value != null) {
//     //                 setIsLoggedIn(true);
//     //             }
//     //         });
//     //     }

//     //     isUserLoggedIn();
//     // }, []);
    
//     return (
//         <NavigationContainer>
//             {/* {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />} */}
//         </NavigationContainer>
//     );
// };

// export default AppNavContainer;