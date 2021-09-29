import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Import Screen Mana Saja yg Akan Saling Terkoneksi
import Login from './../src/Screens/Login/Login'
import Register from './../src/Screens/Register/Register'
import Home from '../src/Screens/Home/Home';

const RegisterRouter = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default RegisterRouter