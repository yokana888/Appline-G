import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";
//import MSSQL from 'react-native-mssql';

const AppNavContainer = /*async*/ () => {

    const isLoggedIn = false;
    /*
    const config = {
        server: '192.168.1.6', //ip address of the mssql database
        username: 'sa', //username to login to the database
        password: 'AdminDL-dev-123', //password to login to the database
        database: 'CobaSql', //the name of the database to connect to
    }

    const connected = await MSSQL.connect(config);

    console.log(connected);
    */

    return (
        <NavigationContainer>

            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
            
        </NavigationContainer>
    );
};

export default AppNavContainer;