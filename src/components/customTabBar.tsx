//Basic Imports
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

//Icons Imports
import { MaterialIcons } from '@expo/vector-icons';

export default function MyTabBar({ state, descriptors, navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.button}
                        >
                            <View style = {styles.buttonContainer}>
                                <View 
                                    style = {
                                        {
                                            width: 50,
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 20,
                                            backgroundColor: isFocused ? 'rgba(0,128,21, 0.3)' : "transparent"
                                        }
                                    }
                                >
                                    <MaterialIcons
                                        name= {options.tabBarIcon}
                                        size={isFocused ? 34 : 24}
                                        color={isFocused ? '#008015' : '#222'}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 60,
        bottom: 0,
        marginBottom: Platform.OS === 'ios' ? 38 : 24,
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 20,
    },
    button: {
        flex: 1,
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});