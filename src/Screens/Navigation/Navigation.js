import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native';

const Stack = createStackNavigator()
const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="HomeStackNavigation" component={HomeStackNavigation} />
        </Stack.Navigator>
    )
}

// Screen Login
const Login = ({ navigation: {navigate} }) => {
    const [dataLogin, setDataLogin] = useState([1, 'mdefryan'])
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Login
            </Text>
            <Button title="On Change Data" onPress={ () => setDataLogin([1, 'ryandefryan']) } />
            <Text onPress={() => navigate('Register', { sendData: dataLogin })} style={{ color: 'blue' }}>
                Go to Register
            </Text>
            <Text onPress={() => navigate('HomeStackNavigation', {sendData: dataLogin})} style={{ color: 'blue' }}>
                Go to Home
            </Text>
        </View>
    )
}

// Screen Register
const Register = ({route}) => {

    useEffect(() => {
        console.log(route.params.sendData)
    }, [])

    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Register
            </Text>
            <Text style={{ fontStyle: 'italic', color: 'red' }}>
                Data from Screen Login: {route.params.sendData[1]}
            </Text>
        </View>
    )
}

// ##########
const HomeStack = createStackNavigator()
const HomeStackNavigation = ({route}) => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home} initialParams={{ dataFromLogin: route.params.sendData }} />
            <HomeStack.Screen name='Products' component={Products} />
            <HomeStack.Screen name='Cart' component={Cart} />
            <HomeStack.Screen name='Transaction' component={Transaction} />
        </HomeStack.Navigator>
    )
}

// Screen Home
const Home = ({route}) => {

    useEffect(() => {
        console.log(route.params)
    }, [])

    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Home
            </Text>
            <Text style={{ fontStyle: 'italic', color: 'blue' }}>
                Go to Products
            </Text>
            <Text style={{ fontStyle: 'italic', color: 'blue' }}>
                Go to Cart
            </Text>
            <Text style={{ fontStyle: 'italic', color: 'blue' }}>
                Go to Transaction
            </Text>
        </View>
    )
}

// Screen Products
const Products = () => {
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Products
            </Text>
        </View>
    )
}

// Screen Cart
const Cart = () => {
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Cart
            </Text>
        </View>
    )
}

// Screen Transaction
const Transaction = () => {
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Transaction
            </Text>
        </View>
    )
}

export default StackNavigation

// Login
// Register
// Home
    // Products
    // Cart
    // Transaction