import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { SAGA_GET_USER_DETAILS, SAGA_LOGIN_USER, SAGA_LOGOUT_USER } from "./user.constants";
import { setLoadingUser, setUserData } from "./user.actions";
import { getUserDetais, login } from "../../http/endpoints";
import { setUserList } from "../Users/users.actions";

 function* sagaLoginUser  (action) {
    const user = action.payload;
    const userState = yield select(state=>state.user)
    userState.loading=true;
    try {
        if(userState.message){
            userState.message=""
        }
        const userToken  = yield call(()=>login(user));
        const newUser = {...userState,token:userToken.token,loading:false}
        yield put(setUserData(newUser))
        
    } catch (error) {
        console.log(error)
        const newUser = {...userState,message:"Login failed: Please enter a registered email and correct password.",loading:false}
        yield put(setUserData(newUser))
    } 
}

function* sagaGetUserDetais (action) {
    const id = action.payload;
    const userState = yield select(state=>state.user);
    userState.message="";
    try {
        const user = yield call(()=>getUserDetais(id))
        const newUser = {...userState,user,message:''}
        yield put(setUserData(newUser))
    } catch (error) {
        console.log(error)
        const newUser = {...userState,message:error.message}
        yield put(setUserData(newUser))
    }
}

function* sagaLogoutUser (){
    const userState = yield select(state=>state.user);
    const newUser ={...userState,token:'',user:{},message:'',loading:false};
    const newUsers =[];
    yield put(setUserData(newUser));
    yield put(setUserList(newUsers));
}
export function* rootUserSaga(){
    yield all([takeLatest(SAGA_LOGIN_USER,sagaLoginUser)]);
    yield all([takeLatest(SAGA_GET_USER_DETAILS,sagaGetUserDetais)]);
    yield all([takeLatest(SAGA_LOGOUT_USER,sagaLogoutUser)]);
}