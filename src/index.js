import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/Layout/App';
import * as serviceWorker from './serviceWorker';

// import { store } from './core/utils';
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// );

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
