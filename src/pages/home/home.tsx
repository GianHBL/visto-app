//Basic Imports
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

//Components Imports
import HeaderMain from "../../components/headerMain";

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderMain 
                text = "Home"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
});