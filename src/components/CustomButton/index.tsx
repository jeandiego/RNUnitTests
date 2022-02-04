import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../../components/CustomInput';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
} 

const CustomButton: React.FC<IButtonProps> = ({title, disabled, ...props}) => {

  return (
    <TouchableOpacity style={[styles.button, disabled && styles.disabledButton]} disabled={disabled} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#255d6d',
    marginHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#13333b',
  },
});

export default CustomButton;