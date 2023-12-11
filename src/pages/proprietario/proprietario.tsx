import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from "react-native";

//Components Imports
import HeaderMain from "../../components/headerMain";
import OptionButton from "../../components/optionButton";

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Proprietario ({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <HeaderMain 
                text = "Proprietários"
            />
            <View style={styles.menu}>
                <OptionButton
                    onPress={() => navigation.navigate('NovoProprietario')}
                    text="Novo Proprietário"
                    icon = "plus"
                />
                <OptionButton
                    onPress={() => navigation.navigate('')}
                    text="Buscar"
                    icon = "magnify"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menu:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '93%',
        flexDirection: 'row',
        top: 20,
    }
});