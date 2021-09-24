import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native';

const Stack = createStackNavigator()
const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
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

export default StackNavigation