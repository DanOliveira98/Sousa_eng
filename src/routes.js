import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MyTabs from './pages/navigation'
import Login from './pages/Login';


const appStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <appStack.Navigator headerMode="none">
                <appStack.Screen name="Login" component={Login}/>
                <appStack.Screen name="Home" component={MyTabs}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;