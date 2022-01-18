import React from 'react';
import { render } from '@testing-library/react-native'
import Profile from '../../screens/Profile';



describe('Test Profile Screen:', () => {
  it('should have be placeholder correctly in name input', () => {
    const { getByPlaceholderText } = render(<Profile />);
    const inputName = getByPlaceholderText('Nome');
  
    expect(inputName).toBeTruthy();
  
  });
  
  it('should have be placeholder correctly in surname input', () => {
    const { getByPlaceholderText } = render(<Profile />);
    const inputLastName = getByPlaceholderText('Sobrenome');
  
    expect(inputLastName).toBeTruthy();
  
  });
  
  it('should be loaded user data', () => {
    const { getByTestId } = render(<Profile />);
    const inputName = getByTestId('input-name')
    const inputSurname = getByTestId('input-surname')
  
    expect(inputName.props.value).toEqual('Jean');
    expect(inputSurname.props.value).toEqual('Diego');
  })
  
  it('should render title correctly', () => {
    const { getByTestId } = render(<Profile />);
  
    const textTitle = getByTestId('text-title');
    expect(textTitle.props.children).toContain('Perfil')
  })
})
