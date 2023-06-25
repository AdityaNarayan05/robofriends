import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import { searchRobots } from './reducers';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots);

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
        </Provider>);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
