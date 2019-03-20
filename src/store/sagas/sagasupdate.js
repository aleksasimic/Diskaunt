import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

import {UpdateProizvod} from "../sagas/api";

import {UPDATE_API_DATA} from "../actions/index";

 function* updateApiData(action){
    console.log("Usao u updateApiData");
    console.log(action);

try{

    const data=yield call(UpdateProizvod,action.payload);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySagaUpdate(){
   
    console.log("U sagi sam,update");
    yield takeLatest(UPDATE_API_DATA,updateApiData);
}


