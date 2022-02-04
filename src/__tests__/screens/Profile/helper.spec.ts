import { pickDocumentPdf } from "../../../screens/Profile/helper";

const mockDocumentPicker = jest.fn();

jest.mock('expo-document-picker', () => ({
  getDocumentAsync: () => mockDocumentPicker(),
}));


const documentResultSuccess = {
  mimeType: 'application/pdf',
  name: 'teste (18).pdf',
  size: 5772,
  type: 'success',
  uri: 'file:///data/user/0/com.moveapp/cache/DocumentPicker/c5b8e325-b169-47df-b3bc-3c5b1084f01a.pdf',
};

describe('Must test the all method of attaching a PDF document with Expo Document Picker', () => {
  it('should return an object with valid PDF if type is "success"', async () => {
    mockDocumentPicker.mockImplementation(() => ({
      mimeType: 'application/pdf',
      name: 'teste (18).pdf',
      size: 5772,
      type: 'success',
      uri: 'file:///data/user/0/com.moveapp/cache/DocumentPicker/c5b8e325-b169-47df-b3bc-3c5b1084f01a.pdf',
    }));

    const result = await pickDocumentPdf();
    expect(result).toEqual(documentResultSuccess);
  });

  it('should return an object with type "cancel" if user cancels action of attaching PDF', async () => {
    mockDocumentPicker.mockImplementation(() => ({
      type: 'cancel',
    }));
    const result = await pickDocumentPdf();
    expect(result).toStrictEqual({ type: 'cancel' });
  });

  it("should display 'Cannot attach document' error message if not getting a valid object", async () => {
    mockDocumentPicker.mockImplementation(() => {
      throw new Error();
    });
    const error = 'Could not attach pdf document';
    expect(await pickDocumentPdf().catch((e) => e.message)).toEqual(error);
  });
});