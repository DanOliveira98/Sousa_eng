import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const Obras = () =>{

        const navigation = useNavigation();
        function hundleHome(){
            navigation.navigate('Home');
        }

        return(
            <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content" // or directly
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{ text: 'OBRAS', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff', onPress: hundleHome}}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
          />
        );
}

export default Obras;