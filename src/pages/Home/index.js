import React from 'react'
import { View, ImageBackground, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header, Image } from 'react-native-elements';



const Home = () =>{
        const navigation = useNavigation();
        function hundleObras() {
            navigation.navigate('Obras');
        }
        return(
        <>
        <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content" // or directly
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{ text: 'SOUSA OLIVEIRA', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff', onPress: hundleObras}}
            containerStyle={{
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
            }}
        />
        <Image
            source={require('../../assets/logo.png')}
            style={{ width: 420, height: 580, top: '30%', opacity: 0.5,}}
            PlaceholderContent={<ActivityIndicator />}
        />
        </>
        );
}
const styles = StyleSheet.create({
    img_back: {
        marginTop:500,
        left:-15,
        opacity: 0.5,
        maxHeight: 600,
        maxWidth: 400,
    },
    container: {
        flex: 1,
        padding: 32,
        opacity: 1,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    container_button: {
        flex: 2,
    },
    title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        flex: 1,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4169e1',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

});

export default Home;