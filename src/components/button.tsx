//Basic Import
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


interface btnProps {
  textBtn: string;
  onPress: () => void;
}

const LoginButton: React.FC<btnProps> = ({ textBtn, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{textBtn}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginButton;
