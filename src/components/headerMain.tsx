//Basic imports
import react, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

//Icons Imports
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

interface HeaderMainProps {
    text : string;
}

const HeaderMain: React.FC<HeaderMainProps> = ({text}) => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity
                        onPress = {handleBack}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style = {styles.title}>
                        {text}
                    </Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="account" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#008015',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    content: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '92%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default HeaderMain;