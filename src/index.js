import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';


const store = createStore(reducers, //todos los reducers
    {}, //estados iniciales
    applyMiddleware(reduxThunk)
)

ReactDOM.render( <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>,
    document.getElementById('root')
);