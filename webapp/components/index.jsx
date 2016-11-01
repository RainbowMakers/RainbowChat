import React from 'react';
import {render} from 'react-dom';
import App from './App';
import chat from './chat';

chat.rooms(function(rooms){
    console.log(rooms)
})
render(
  <App />,
  document.getElementById('root')
);
