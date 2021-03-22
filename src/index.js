// import React from 'react';
// import ReactDOM from 'react-dom';
// import FirstApp from './FirstApp';
//
// import './index.css';
//
// const divRoot = document.querySelector('#app');
//
// ReactDOM.render( <FirstApp />, divRoot);

//---------------------------------------- <> Test
import React from 'react';
import CounterApp from './CounterApp';
import ReactDOM from 'react-dom';
import './index.css';

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value = {0} />, divRoot);
