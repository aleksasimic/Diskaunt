import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

import {AddProizvod} from "../sagas/api";

import {ADD_API_DATA} from "../actions/index";

 function* addApiData(action){
    console.log("Usao u addApiData");
    console.log(action);

try{

    const data=yield call(AddProizvod,action.payload);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySagaAdd(){
   
    console.log("U sagi sam,add");
    yield takeLatest(ADD_API_DATA,addApiData);
}


