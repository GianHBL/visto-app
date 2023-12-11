import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from "react-native";

import { useNavigation } from '@react-navigation/native';

import HeaderMain from "../../components/headerMain";
import OptionButton from "../../components/optionButton";


export default function Imovel ({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <HeaderMain
                text="Imóveis"
            />
            <View style={styles.menu}>
                <OptionButton
                    onPress={() => navigation.navigate('RegisterImovel')}
                    text="Novo Imóvel"
                    icon="plus"
                />
                <OptionButton
                    onPress={() => navigation.navigate('RegisterImovel')}
                    text="Buscar"
                    icon="magnify"
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
    menu: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '93%',
        flexDirection: 'row',
        top: 20,
    }
});