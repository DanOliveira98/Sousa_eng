import React, {useState} from 'react';
import {  Text, View, TextInput,StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import Config from '../../../../config/config.json'



const New = () => {
    
    
    const [description, setDescription] = useState('');
    const [endereco, setEndereco] = useState('');
    const [display, setDisplay] = useState();
    const [response, setResponse] = useState();
    const [user, setUser] = useState();
    const [cliente, setCliente] = useState();

    async function sendForm(){
        let response = await fetch ('http://192.168.1.7:3000/create/obra', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: description,
                endereco: endereco,
                userId: 1,
                clienteId: 2,
            })
        })
    }


    return(
            <View style={styles.login_form}>
            <Text style={styles.title}>Nova Obra</Text>
            <Text style={styles.login_msg(display)}>
                       Não foi possivel criar essa Obra!!
            </Text>
            <TextInput placeholder='Nome da Obra' style={styles.login_input} onChangeText={text=>setDescription(text)}/>
            <TextInput placeholder='Endereço' style={styles.login_input} onChangeText={text=>setEndereco(text)}/>
                <View>
                    <TouchableOpacity style={styles.login_button}>
                    <Text style={styles.login_buttonText} onPress={()=>sendForm()}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    back: {
        backgroundColor: '#3D6DCC',
    },
    title: {
        color: '#322153',
        fontSize: 30,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
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
})
export default New;