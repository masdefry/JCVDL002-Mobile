import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

const Stack = createStackNavigator()
const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='BottomStackNavigation' component={BottomStackNavigation} />
        </Stack.Navigator>
    )
}

// Screen Login
const Login = ({ navigation: {navigate} }) => {

    let nama = 'Defryan'

    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Login
            </Text>
            <Text onPress={ () => navigate('Register', {sendData: nama}) } style={{ color: 'blue' }}>
                Go to Register Screen
            </Text>
            <Text onPress={ () => navigate('BottomStackNavigation') } style={{ color: 'green' }}>
                Go to Home
            </Text>
        </View>
    )
}

// Screen Register
const Register = ({ navigation: {navigate}, route }) => {

    useEffect(() => {
        console.log(route.params.sendData)
    }, [])

    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Register
            </Text>
            <Text style={{ color: 'red' }}>
                Data from Login Screen: {route.params.sendData}
            </Text>
            <Text onPress={() => navigate('Login')} style={{ color: 'blue' }}>
                Back to Login Screen
            </Text>
        </View>
    )
}

// ##########
const BottomStack = createBottomTabNavigator()
const BottomStackNavigation = () => {
    return(
        <BottomStack.Navigator>
            <BottomStack.Screen name="Products" component={Products} />
            <BottomStack.Screen name="HomeStackNavigation" component={HomeStackNavigation} />
            <BottomStack.Screen name="Transaction" component={Transaction} />
        </BottomStack.Navigator>
    )
}

// Screen Home
const Home = ({ navigation: {navigate} }) => {
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen Home
            </Text>
            <Text onPress={() => navigate('A')}>
                Go to Screen A
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

// ###############

const HomeStack = createStackNavigator()
const HomeStackNavigation = () => {
    return(
        <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} />
        <HomeStack.Screen name='A' component={A} />
        <HomeStack.Screen name='B' component={B} />
        <HomeStack.Screen name='C' component={C} />
    </HomeStack.Navigator>
    )
}

// Screen A
const A = () => {
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen A
            </Text>
        </View>
    )
}

// Screen B
const B = () => {
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen B
            </Text>
        </View>
    )
}

// Screen C
const C = () => {
    return(
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Screen C
            </Text>
        </View>
    )
}

export default StackNavigation

// Login
// Register
    // Home
        // A
            // A1
            // A2
            // A3
        // B
        // C
    // Products
    // Transaction