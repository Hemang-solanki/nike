import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { proReducer } from "./Productpage/productReducer";
import { SingleproReducer } from "./Singleproduct/singlePageReducer";
import {thunk} from 'redux-thunk'
import { loginreducer } from "./Login/loginreducer";
import {cartReducer} from './Cartpage/cartReducer'

let combine = combineReducers({
    loginreducer: loginreducer,
    productReducer : proReducer,
    SingleProduct : SingleproReducer,
    cartReducer:cartReducer
})


export const store = legacy_createStore(combine,applyMiddleware(thunk))