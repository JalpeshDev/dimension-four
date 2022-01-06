import { createStore, applyMiddleware } from 'redux';
import reducer from './Birds/reducer';
import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk));
export { store };
