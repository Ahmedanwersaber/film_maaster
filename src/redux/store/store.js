
import { createStore,applyMiddleware } from "redux";
import {Moviereducer} from '../reducer/Moviereducer';
import thunk from "redux-thunk";
export const store=createStore(Moviereducer,applyMiddleware(thunk));