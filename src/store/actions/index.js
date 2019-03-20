export const PRODUCT_SEARCH='PRODUCT_SEARCH';
export const PRODUCT_LIKE='PRODUCT_LIKE';
export const PRODUCT_DISLIKE='PRODUCT_DISLIKE';
export const ADMIN_LOGIN='ADMIN_LOGIN';
export const REQUEST_API_DATA="REQUEST_API_DATA";
export const RECEIVE_API_DATA="RECEIVE_API_DATA";
export const LIKE_API_DATA="LIKE_API_DATA";
export const DISLIKE_API_DATA="DISLIKE_API_DATA";
export const ADD_API_DATA="ADD_API_DATA";
export const UPDATE_API_DATA="UPDATE_API_DATA";
export const DELETE_API_DATA="DELETE_API_DATA";
export const SEARCH_API_DATA="SEARCH_API_DATA";
export const AUTH_API_DATA="AUTH_API_DATA";


export function searchProduct(naziv,popust,cena,market,tip){
    console.log("U search product sam");
    let tmp={
        naziv:naziv,
        popust:popust,
        cena:cena,
        market:market,
        tip:tip
    }
    return {
        type:PRODUCT_SEARCH,
        payload:tmp
    }
}
export function likeProduct(id){
    return {
        type:PRODUCT_LIKE,
        payload:id
    }
}
export function dislikeProduct(id){
    return {
        type:PRODUCT_DISLIKE,
        payload:id
    }
}
export function logIn(username,password){
    let tmp={
        username:username,
        password:password
    }
    return{
        type:ADMIN_LOGIN,
        payload:tmp
    }
}
export const requestApiData=()=>({type:REQUEST_API_DATA});
export const receiveApiData=data=>({type:RECEIVE_API_DATA,data});
export const likeApiData=id=>(console.log("tu sam",id),{type:LIKE_API_DATA,payload:id});
export const dislikeApiData=id=>(console.log("ID U ACTION",id),{type:DISLIKE_API_DATA,payload:id});
export const addData=(tmp)=>(console.log("U add data sam",tmp),{type:ADD_API_DATA,payload:tmp});
export const updateData=(obj)=>(console.log("U update action sam",obj),{type:UPDATE_API_DATA,payload:obj});
export const deleteData=zabrisanje=>(console.log("ID U DELETU",zabrisanje),{type:DELETE_API_DATA,payload:zabrisanje});
export const searchData=(tmp)=>(console.log("U search data sam",tmp),{type:SEARCH_API_DATA,payload:tmp});
export const authUser=(tmp)=>(console.log("U authentitacete data sam",tmp),{type:AUTH_API_DATA,payload:tmp});
