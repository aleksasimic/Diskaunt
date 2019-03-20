import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

 function* getApiData(action){
    console.log("Usao u getApiData");
    console.log(action);

try{

    const data=yield call(fetchData);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySaga(){
   
    yield takeLatest(REQUEST_API_DATA,getApiData);
}


