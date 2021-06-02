import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

// Create for Componental uses
const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"Dashboard"}
                    headerMode="none">
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
export default AppStack;



