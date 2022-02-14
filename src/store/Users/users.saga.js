
import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { getUsers } from "../../http/endpoints";
import { setUserList } from "./users.actions"
import { SAGA_GET_USERS } from "./users.constants"

function *sagaGetUsers ()  {
    try {        
        const userList  = yield call(getUsers);
        yield put(setUserList(userList))
    } catch (error) {
        console.log(error)
    }

}

export function* rootUsersSaga () {
    yield all([takeLatest(SAGA_GET_USERS,sagaGetUsers)])
}