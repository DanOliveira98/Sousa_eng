import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Obras from './pages/Obras';


const appStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <appStack.Navigator headerMode="none">
                <appStack.Screen name="Home" component={Home}/>
                <appStack.Screen name="Obras" component={Obras}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;