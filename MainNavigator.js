import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import List from './screens/List';
import Add from './screens/Add';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MainNavigator;
