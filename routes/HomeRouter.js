import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../src/Screens/Home/Home'
import ShuttleList from '../src/Screens/ShuttleList/ShuttleList';

const HomeStack = createStackNavigator();

const HomeRouter = () => {
    return(
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='ShuttleList' component={ShuttleList} />
        </HomeStack.Navigator>
    )
}

export default HomeRouter