import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../../components/CustomInput';

const Profile: React.FC = () => {
  return (
  
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text testID="text-title" style={styles.title}>Perfil</Text>
      </View>
      <CustomInput 
        testID='input-name'
        placeholder="Nome" 
        value="Jean"
        autoCorrect={false} />
      <CustomInput 
        testID='input-surname'
        placeholder="Sobrenome" 
        value="Diego"
        autoCorrect={false} />

      <Button  title="Salvar" onPress={ () => {}}/>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#131649',
  },
  button: {
    backgroundColor: '#61dafb',
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 24,
    color: '#FFF'
  }
});

export default Profile;