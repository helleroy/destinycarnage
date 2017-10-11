import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
