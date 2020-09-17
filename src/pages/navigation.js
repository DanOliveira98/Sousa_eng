import React, { useEffect } from 'react';
import {BackHandler, Alert} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Obras from './Obras';
import Home from './Home';
import User from './User'

const Tab = createMaterialBottomTabNavigator();

function MyTabs(navigation) {
  
      useEffect(() => {
          const backAction = () => {
            Alert.alert("Espere!", "Deseja Mesmo Sair?", [
              {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
              },
              { text: "Sim", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };

          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );

          return () => backHandler.remove();
      }, []);

  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Obras" component={Obras} />
      <Tab.Screen name="Usuario" component={User} />
    </Tab.Navigator>
    
  );
}


export default MyTabs;