import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface MeuBotaoProps {
    text: string;
    textBtn: string;
    onPress: (  ) => void;
}

const RegisterButton: React.FC<MeuBotaoProps> = ({ text, textBtn, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
            <TouchableOpacity 
                style={styles.btn} 
                onPress={onPress}
            >
                <Text style={styles.textBtn}>
                    {textBtn}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    btn: {
        width: 'auto',
        paddingLeft: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
});

export default RegisterButton;
