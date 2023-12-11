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

import HeaderMain from "../../components/headerMain";
import FormInput from "../../components/input";

import LoginButton from '../../components/button';
import RegisterButton from '../../components/textButton';

export default function NovoProprietario({ navigation } : { navigation: any}) {
    return (
        <View style={styles.container} >
            <HeaderMain
                text="Novo Proprietário"
            />
            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Text style={styles.title}>
                        Endereço do Proprietário
                    </Text>
                    <Text style={styles.subtitle}>
                        Insira os dados para continuar
                    </Text>
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="Nome do Proprietário"
                        secureTextEntry={false}
                    />
                    <FormInput
                        placeholder="Email do Proprietário"
                        secureTextEntry={false}
                    />

                    <FormInput
                        placeholder="Telefone do Proprietário"
                        secureTextEntry={false}
                    />
                    <FormInput
                        placeholder="CPF do Proprietário"
                        secureTextEntry={false}
                    />
                    <LoginButton
                        textBtn="Cadastrar"
                        onPress={() => navigation.navigate('Tabs')}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    containerForm: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40,
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