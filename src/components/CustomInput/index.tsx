import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

interface IInputProps extends TextInputProps {
  active?: boolean;
}

const CustomInput: React.FC<IInputProps> = ({children, active = false,...props}) => {
  return (
    <TextInput
      style={styles.inputView} 
      placeholderTextColor="#E2E2E2" 
      autoCorrect={false}
      active={active}
      {...props}
      >
      <Text>{children}</Text>
    </TextInput>
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
  },
});