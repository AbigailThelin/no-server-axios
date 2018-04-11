import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';
import { rootReducer  } from '../reducer';
import { Store, createStore, compose, applyMiddleware } from 'redux';


const loggerMiddleware = createLogger();
const middlewares = [ thinkMiddleWare, loggerMiddleware ];

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
}