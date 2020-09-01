import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, Text, View, TextInput,StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header, Image } from 'react-native-elements';


const Login = () =>{

    const [display, setDisplay] = useState();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [login, setLogin] = useState();    

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
        console.log(json);
        if( json === 'failed'){
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 3000);
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
                    <TextInput placeholder='Usuário:' style={styles.login_input} onChangeText={text=>setUser(text)}/>
                    <TextInput placeholder='Senha:' secureTextEntry={true} style={styles.login_input} onChangeText={text=>setPassword(text)}/>

                    <TouchableOpacity style={styles.login_button} onPress={()=>sendForm()}>
                        <Text style={styles.login_buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
}
const styles = StyleSheet.create({
    back: {
        backgroundColor: "#333",
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
        backgroundColor: '#fff',
        fontSize: 19,
        padding: 7, 
        marginBottom: 15,
    },
    login_button: {
        padding: 12,
        backgroundColor: 'blue',
        alignSelf: "center",
        borderRadius: 5,
    },
    login_buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: '#333'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
});
export default Login;