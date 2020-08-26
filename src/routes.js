import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';


const appStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <appStack.Navigator headerMode="none">
                <appStack.Screen name="Home" component={Home}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;