import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const CustomInput: React.FC<TextInputProps> = ({children, active = false,...props}) => {
  return (
    <TextInput
      style={[styles.inputView, active && styles.activeInput ]} 
      placeholderTextColor="#b1aeff78" 
      autoCorrect={false}
      active={active}
      {...props}
    />
  )
}

export default CustomInput;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#040840',
    color: "#b1aeff",
    fontSize: 18,
    fontWeight: '400',
    paddingVertical: 16 ,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    marginBottom: 6,
    borderRadius: 6,
  },
  activeInput: {
    borderWidth: 2,
    borderColor: '#9795f5'
  }
});