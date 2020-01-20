import { createStore, compose, applyMiddleware } from 'redux';
import AppReducer from './reducers/index';
import { save } from 'redux-localstorage-simple'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = preloadedState => (
    createStore(
        AppReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(save({namespace: 'react-todo-app' }))
        ),
    )
);

const store = configureStore({});

export default store;
