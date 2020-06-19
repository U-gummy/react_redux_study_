import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux' // redux 연결
import 'antd/dist/antd.css'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers' // 자동을 index.js 처리 해줌 

// 그냥 createStore 만 하면 되지만 그냥 Store는 객체밖에 못받기 때문에 
// promise와 function 도 받게 해줄수 있게 middleware와 함께 만들어 준다
const creactStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk) (createStore)

ReactDOM.render(

  <Provider
    store={creactStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <React.StrictMode>
     <App />
   </React.StrictMode>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
