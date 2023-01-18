import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { DASHBOARD } from "../constants/routeName";
import DashboardPage from "../screens/Dashboards";

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="DashboardPage">
            <HomeStack.Screen name={DASHBOARD} component={DashboardPage}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;