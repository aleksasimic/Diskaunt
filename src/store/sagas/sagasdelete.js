import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

import {DeleteProizvod} from "../sagas/api";

import {DELETE_API_DATA} from "../actions/index";

 function* deleteApiData(action){
    console.log("Usao u deleteApiData");
    console.log(action);

try{

    const data=yield call(DeleteProizvod,action.payload);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySagaDelete(){
   
    console.log("U sagi sam");
    yield takeLatest(DELETE_API_DATA,deleteApiData);
}


