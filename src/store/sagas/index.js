import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import  mySaga from './sagas';
import mySagaLajk from './sagaslajk'; 
import mySagaDislike from './sagasdislajk';
import  mySagaAdd from './sagasadd';
import mySagaUpdate from './sagasupdate';
import mySagaDelete from './sagasdelete';
import mySagaSearch from './sagassearch';
import mySagaAuth from './sagasauthenticate';


export default function* root() {
    yield all([
        fork(mySaga),
        fork(mySagaLajk),
        fork(mySagaDislike),
        fork(mySagaAdd),
        fork (mySagaUpdate),
        fork (mySagaDelete),
        fork(mySagaSearch),
        fork (mySagaAuth)
     
    ])
}