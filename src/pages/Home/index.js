import React from 'react'
import { View, ImageBackground, Text, Image, StyleSheet } from 'react-native';

const Home = () =>{
        return(
            <ImageBackground source={require('../../assets/logo.png')} resizeMode="contain" style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Projeto DMOB</Text>
                </View>
            </ImageBackground>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: 'red',
          left: 1,
          top: -20,
    },


});

export default Home;