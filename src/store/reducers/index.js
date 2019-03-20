import {combineReducers} from 'redux'; 
import ProductsReducer from './products-list.reducers';
import data from "./data";


const rootReducer=combineReducers({
    products:ProductsReducer,
    data:data
});

export default rootReducer;