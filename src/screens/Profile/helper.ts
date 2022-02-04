import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { DocumentResult } from 'expo-document-picker';

export const pickDocumentPdf = async (): Promise<DocumentResult> => {
  try {
    const document = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf'],
    });

    return document;
  } catch (error) {
    /* istanbul ignore next */
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') console.warn(error);
    throw new Error('Could not attach pdf document');
  }
};