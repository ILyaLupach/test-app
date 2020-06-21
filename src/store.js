import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'

const saga = createSagaMiddleware()

export const middleware = [thunk, saga]

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware),
));
