import React, {useState, useEffect} from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Modal, AsyncStorage } from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import ObrasNew from './New'


const Obras = () =>{


        const navigation = useNavigation();
        const [modal, setModal] = useState('');
        const [user, setUser] = useState('');


        async function hundleLogout() {

          await AsyncStorage.clear();
          navigation.navigate('Login');

        }
        async function show(){
          let response = await AsyncStorage.getItem('userData');
          let json = JSON.parse(response);
          setUser(json.id)
          let show = await fetch ('http://192.168.1.7:3000/selected/obra', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clienteId: user,
            })
        })
        }

        function activeModal(){
          setModal(true);
        }
        return(
          <ImageBackground
          source={require('../../assets/logo_nova.png')}
          style={styles.container}
          resizeMode="contain"
          imageStyle={{opacity: 0.75, width: '96%', left: 6}}
          >
            <View>
                <View style={styles.containerHeader}>
                    <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    centerComponent={{ text: 'OBRAS', style: { color: '#fff', fontSize: 22 } }}
                    rightComponent={{ icon: "exit-to-app", color: '#fff', onPress: activeModal}}
                    containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                    }}
                    style={styles}
                    />
                </View>  
                <View>
                  <Modal
                    transparent={true}
                    visible={modal}
                  >
                    <View style={styles.modal}>
                      <View style={styles.modalNew}>
                        <ObrasNew />
                        <TouchableOpacity style={styles.login_button}>
                        <Text style={styles.login_buttonText} onPress={()=>setModal(false)}>Sair</Text>
                      </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </View>
                
            </View>
          </ImageBackground>
        );
}
const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#333', 
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {

  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%', 
    position: 'absolute',
    backgroundColor: '#f0f0f5',
  },
  modal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalNew: {
    backgroundColor: '#ffffff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
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
  login_buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: '#3A3538',
  },

});
export default Obras;