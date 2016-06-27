import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Avatar from './Avatar.js';

ReactDOM.render(<App/>, document.getElementById('app'))

setTimeout(() => {
	ReactDOM.unmountComponentAtNode(document.getElementById('app'));
	ReactDOM.render(<Avatar/>, document.getElementById('app'));
}, 10000);