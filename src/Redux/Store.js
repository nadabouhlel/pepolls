import { createStore,  applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {AuthReducer}  from '../Redux/Reducers/AuthReducer'

const reducer = combineReducers({

    login: AuthReducer,
}) 

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store 