import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainNavigator;