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

export default function Imovel() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <HeaderMain 
                text = "Imóveis"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});