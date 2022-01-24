import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import BodyContainer from '../BodyContainer';
import {USER_INFO_TEST} from './constants/usernameInfo';

test('render content BodyContainer', () => {

    render(<BodyContainer 
    usernameInfo={USER_INFO_TEST}
    error={false}
  />)
  

})