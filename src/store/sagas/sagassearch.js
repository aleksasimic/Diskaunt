import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

import {searchProizvod} from "../sagas/api";

import {SEARCH_API_DATA} from "../actions/index";

 function* searchApiData(action){
    console.log("Usao u searchApiData");
    console.log(action);

try{

    const data=yield call(searchProizvod,action.payload);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySagaSearch(){
   
    console.log("U sagi sam,search");
    yield takeLatest(SEARCH_API_DATA,searchApiData);
}


