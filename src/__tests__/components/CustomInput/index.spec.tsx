import React from 'react';
import { render } from '@testing-library/react-native'
import CustomInput from '../../../components/CustomInput';


// @COMMENTS: In styled components it is possible to make a wrapper to prove the
// themes via ThemeProvider. Is necessary to use jest styled-components.

// const Providers: React.FC = ({children}) => {
//   <ThemeProvider theme={theme}">
//     {children}
//   </ThemeProvider>
// };


describe('Input component:', () => {
  it('must have specific border color when active', () => {
    const { getByTestId } = render(
    <CustomInput 
      testID="input-email"
      placeholder="E-mail"
      keyboardType="email-address"
      active={true}
    />
    // {
    //   wrapper: Providers
    // }
    );
    const inputComponent = getByTestId('input-email');
  
    expect(inputComponent.props.style[1].borderColor).toEqual('#9795f5');
    expect(inputComponent.props.style[1].borderWidth).toEqual(2);
  });
})
