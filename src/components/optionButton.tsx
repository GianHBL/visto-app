//Basic imports
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

//Icons Imports
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Props
interface OptionButtonProps {
    icon: any;
    text: string;
    onPress: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ icon, text, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.btn}
                onPress= {onPress}
            >
                <MaterialCommunityIcons
                    name={icon}
                    size={60}
                    color="#fff"
                />
            </TouchableOpacity>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        width: "33.33%",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 85,
        height: 85,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        elevation: 10,
        paddingTop: 5,
    },
});

export default OptionButton;