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


export default function Vistoria ({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <HeaderMain
                text="Vistorias"
            />
            <View style={styles.menu}>
                <OptionButton
                    onPress={() => navigation.navigate('')}
                    text="Nova Vistoria"
                    icon="plus"
                />
                <OptionButton
                    onPress={() => navigation.navigate('')}
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
    menu:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '93%',
        flexDirection: 'row',
        top: 20,
    }
});