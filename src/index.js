import React from 'react';
import ReactDom from 'react-dom';
import App from './App'; //pull the app component

ReactDom.render(
<App/>, 
    document.querySelector('#root')
    );