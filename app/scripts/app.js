import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

ReactDOM.render(<Home/>, mountNode);
