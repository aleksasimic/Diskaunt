import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA,receiveApiData}from "../actions/index";
import{ fetchData }from "../sagas/api";

import {DislajkProizvod} from "../sagas/api";

import {DISLIKE_API_DATA} from "../actions/index";

 function* dislikeApiData(action){
    console.log("Usao u dislajkApiData");
    console.log(action);

try{

    const data=yield call(DislajkProizvod,action.payload);
    console.log(data);
    yield put(receiveApiData(data));



}
catch(e){

    console.log(e);
}


}
export default function* mySagaDislike(){
   
    console.log("U sagi sam,dislajk");
    yield takeLatest(DISLIKE_API_DATA,dislikeApiData);
}


