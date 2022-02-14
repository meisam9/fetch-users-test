import { applyMiddleware, compose, createStore } from "redux";
import { middlewares, sagaMiddleware } from "./store.middleware";
import { reducers } from "./store.reducers";
import { rootStoreSaga } from "./store.saga";

const compuseEnhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose ;
const preloadedState = JSON.parse(window.localStorage.getItem('state') || "{}");
export const appStore = createStore(reducers,preloadedState,compuseEnhancer(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootStoreSaga);