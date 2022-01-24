import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import HeaderSearch from '../HeaderSearch';

test('render content', () => {


   const username= 'jesus';
   const setUsername= 'jesus';
   const setUsernameInfo= {};
   const setError= false;

  const {container } = render(<HeaderSearch 
  username={username} setUsername={setUsername} setUsernameInfo={setUsernameInfo} setError={setError}
  />)
  container.querySelector('#button-searcher');

})

