import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from './store/reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider}from 'react-redux';
import {createStore} from 'redux'; 
import reducer from './store/reducers/';
import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './store/sagas/sagas';
import root from './store/sagas/index';
//import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware=createSagaMiddleware();
const store=createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(root)
store.runSaga=sagaMiddleware.run
ReactDOM.render(
    <Provider store={store}>
    <App/>


    </Provider> 
    , document.getElementById('root'));
registerServiceWorker();

