import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

import {AuthUser} from "../sagas/api";

import {AUTH_API_DATA} from "../actions/index";

 function* authApiData(action){
    console.log("Usao u addApiData");
    console.log(action);

try{

    const data=yield call(AuthUser,action.payload);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySagaAuth(){
   
    console.log("U sagi sam,auth");
    yield takeLatest(AUTH_API_DATA,authApiData);
}


