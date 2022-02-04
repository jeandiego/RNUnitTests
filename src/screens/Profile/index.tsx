import { DocumentResult } from 'expo-document-picker';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { pickDocumentPdf } from './helper';

const Profile: React.FC = () => {
  const [name, onChangeName] = React.useState<string>('');
  const [surname, onChangeSurname] = React.useState<string>('');
  const [document, setDocument] = React.useState<DocumentResult>();

  const onUploadFile = async () => {
    try {
      const result = await pickDocumentPdf();
      if (result.type === 'cancel') return;

      setDocument(result)

    } catch (error) {
      Alert.alert('Something went wrong')
    }
  };

  return (
  
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <View style={styles.header}>
        <Text testID="text-title" style={styles.title}>Profile</Text>
      </View>

      <CustomInput 
        testID='input-name'
        placeholder="Name" 
        value={name}
        onChangeText={onChangeName}
        autoCorrect={false}
      />
      <CustomInput 
        testID='input-surname'
        placeholder="Surname" 
        value={surname}
        onChangeText={onChangeSurname}
        autoCorrect={false} />
     <CustomButton title="Send a file" onPress={onUploadFile}/>
     {document?.type === 'success' &&
     <View style={styles.uriText}>
       <Text style={{color: '#b1aeff78'}} numberOfLines={3}>Document successfully attached</Text>
     </View>
     }
      </View>
     <View >
      <CustomButton title="Save" disabled={!name || !surname || !document} />
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#131649',
    justifyContent:"space-around",
  },
  content: {
    flex: 1, 
    justifyContent: 'center',
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 24,
    color: '#FFF'
  },
  uriText: {
    marginHorizontal: 24,
    marginVertical: 16,
    alignItems: 'center',
  }
});

export default Profile;