import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeRouter from "./HomeRouter";
import Transaction from './../src/Screens/Transaction/Transaction'
import Profile from './../src/Screens/Profile/Profile'

const BottomStack = createBottomTabNavigator()

const MainRouter = () => {
    return(
        <BottomStack.Navigator screenOptions={{ headerShown: false }}>
            <BottomStack.Screen name="HomeRouter" component={HomeRouter} />
            <BottomStack.Screen name="Transaction" component={Transaction} />
            <BottomStack.Screen name="Profile" component={Profile} />
        </BottomStack.Navigator>
    )
}

export default MainRouter