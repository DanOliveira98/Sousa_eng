import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, Text, View, TextInput,StyleSheet, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header, Image } from 'react-native-elements';



const Login = ({navigation}) =>{

    const [display, setDisplay] = useState();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [login, setLogin] = useState();    

    async function recSenha(){
        
    }
    async function sendForm(){
        let response=await fetch ('http://192.168.1.7:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: password,

            })
        })
        let json = await response.json();
        if( json === 'failed'){
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 3000);
            await AsyncStorage.clear();
        }else{
            let userData= await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('Home');
        }
    }
    
        return(
            <KeyboardAvoidingView style={[styles.container, styles.back]}>
                <View style={styles.login_logomarca}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 335, height: 285}}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <View>
                    <Text style={styles.login_msg(display)}>
                        Usuario ou senha invalidos!!
                    </Text>
                </View>
                <View style={styles.login_form}>
                    <TextInput placeholder='Usuário' style={styles.login_input} onChangeText={text=>setUser(text)}/>
                    <TextInput placeholder='Senha' secureTextEntry={true} style={styles.login_input} onChangeText={text=>setPassword(text)}/>
                <View>
                    <TouchableOpacity style={styles.login_button} onPress={()=>sendForm()}>
                        <Text style={styles.login_buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.login_buttonRec} onPress={()=>recSenha()}>
                        <Text style={styles.login_buttonTextRec}>Esqueceu a Senha?</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </KeyboardAvoidingView>
        )
}
const styles = StyleSheet.create({
    back: {
        
    },
    login_msg:(text='none')=>({
        fontWeight: 'bold',
        fontSize: 22,
        color: 'red',
        marginBottom: 15,
        marginTop: 5,
        display: text
    }),
    login_form: {
        width: '80%',
    }, 
    login_logomarca:{
        marginBottom: 15,
    },
    login_input: {
        backgroundColor: '#3A3538',
        fontSize: 19,
        padding: 10, 
        marginBottom: 15,
        color: '#d3d3d3',
        borderRadius: 9,
    },
    login_button: {
        padding: 15,
        width: '100%',
        backgroundColor: '#8A8C9A',
        alignSelf: "center",
        alignItems:"center",
        borderRadius: 5,
        marginBottom: 10,
    },
    login_buttonRec: {
        padding: 15,
        width: '100%',
        alignSelf: "center",
        alignItems:"center",
        marginBottom: 10,
    },


    login_buttonTextRec: {
        fontWeight: "bold",
        fontSize: 22,
        color: '#3A3538',
    },
    login_buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: '#3A3538',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
});
export default Login;