import {RECEIVE_API_DATA} from "../actions/index";

export default (state={},{type,data}) =>{
switch(type){
case RECEIVE_API_DATA:
console.log("DESILO SE RECEIVE DATA ");
console.log(data);
return data;

default:
return state;



}

}
