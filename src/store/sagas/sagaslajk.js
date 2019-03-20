import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

import {LikeProizvod} from "../sagas/api";

import {LIKE_API_DATA} from "../actions/index";

 function* likeApiData(action){
    console.log("Usao u lajkApiData");
    console.log(action);

try{

    const data=yield call(LikeProizvod,action.payload);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySagaLajk(){
   
    console.log("U sagi lajk");
    yield takeLatest(LIKE_API_DATA,likeApiData);
}


