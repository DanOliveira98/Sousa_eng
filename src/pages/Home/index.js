import React, {useState, useEffect} from 'react'
import { View, ImageBackground, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header, Image } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';



const Home = () =>{
        const navigation = useNavigation();
        function hundleLogin() {
            navigation.navigate('Login');
        }

        const [user, setUser] = useState();

        useEffect(()=>{
            async function getUser() 
            {
                let response = await AsyncStorage.getItem('userData');
                let json = JSON.parse(response);
                setUser(json.username); 
            }
            getUser();
        }, []);


        return(
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={{ text: 'SOUSA OLIVEIRA', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff', onPress: hundleLogin}}
                    containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                    }}
                />
                <Text>SEJA BEM VINDO {user}</Text>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: 420, height: 580, top: '30%', opacity: 0.5}}
                    PlaceholderContent={<ActivityIndicator />}
                />

                
            </View>
        );
}
const styles = StyleSheet.create({
    

});

export default Home;