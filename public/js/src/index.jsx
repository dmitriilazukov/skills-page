import React from 'react';
import ReactDom from 'react-dom';
import Win98App from './win98';
import Win98Store from './store';
import {Provider} from 'mobx-react'
import '../../css/core/main.scss';

let store = Win98Store;
ReactDom.render(
    <Provider appState={store}>
        <Win98App/>
    </Provider>,
    document.getElementById('root')
);