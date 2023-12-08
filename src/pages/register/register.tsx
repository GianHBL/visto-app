//Basic Import
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

//Components Import
import { useNavigation } from '@react-navigation/native';
import LoginButton from "../../components/button";
import FormInput from "../../components/input";
import RegisterButton from "../../components/textButton";

//Navigation Import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Register({ navigation }: { navigation: any }) {

    return (
        <View style={styles.container} >

            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>
                        Criar uma conta
                    </Text>
                    <Text style={styles.subtitle}>
                        Insira seus dados para continuar
                    </Text>
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="Digite seu nome"
                        secureTextEntry={false}
                    />
                    <FormInput
                        placeholder="Digite seu email"
                        secureTextEntry={false}
                    />

                    <FormInput
                        placeholder="Digite seu telefone"
                        secureTextEntry={false}
                    />
                    <FormInput
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                    />
                    <LoginButton
                        textBtn="Cadastrar"
                        onPress={() => navigation.navigate('Tabs')}
                    />
                    <RegisterButton
                        text="Já possui uma conta?"
                        textBtn="Login"
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
                <View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    containerForm: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    formTitle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',
    },

    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

});