import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from "react-native";

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginButton from '../../components/button';
import RegisterButton from '../../components/textButton';

export default function Welcome({ navigation } : { navigation: any}) {
    return (
        <View style={styles.container}>
            <View
                style={styles.titleContainer}
            >
                <Text style={styles.title}>
                    Bem-vindo(a) ao Visto!
                </Text>
                <Text style={styles.subtitle}>
                    Aplicativo que organiza suas vistorias
                </Text>
            </View>
            <View
                style={styles.btn}
            >
                <LoginButton
                    textBtn="Login"
                    onPress={() => navigation.navigate('Login')}
                />
                <RegisterButton
                    text="Ainda não tem uma conta?"
                    textBtn="Cadastre-se"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
            <Image 
                source={require('../../assets/image/bg-image.png')}
                style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    btn: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },

    titleContainer: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
});