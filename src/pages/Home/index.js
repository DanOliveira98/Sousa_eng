import  React, {useState, useEffect} from 'react'
import { View, StyleSheet, ImageBackground, BackHandler, Alert} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Header, Image, Text} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';


  


    
    
    
const Home = () =>{

    
        const navigation = useNavigation();
        const [user, setUser] = useState();

       

        async function hundleLogout() {

            await AsyncStorage.clear();
            navigation.navigate('Login');

        }
        

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
                <ImageBackground
                        source={require('../../assets/logo_nova.png')}
                        style={styles.img}
                        resizeMode="contain"
                >
                    <View>
                        <View>
                            <Header
                            statusBarProps={{ barStyle: 'light-content' }}
                            barStyle="light-content" // or directly
                            centerComponent={{ text: 'INÍCIO', style: { color: '#fff', fontSize: 22 } }}
                            rightComponent={{ icon: "exit-to-app", color: '#fff', onPress: hundleLogout}}
                            containerStyle={{
                            backgroundColor: '#3D6DCC',
                            justifyContent: 'space-around',
                            }}
                            />
                        </View>
                    </View>
                </ImageBackground>
           
        );
}
const styles = StyleSheet.create({
    
    img: {
        flex: 1,
        backgroundColor:'#f0f0f5',
        width: '100%',
        height: '100%', 
    }
});

export default Home;