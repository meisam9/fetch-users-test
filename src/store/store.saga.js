import { all, fork } from "redux-saga/effects";
import { rootUserSaga } from "./User/user.saga";
import { rootUsersSaga } from "./Users/users.saga";

export function* rootStoreSaga () {
    return yield all([fork(rootUserSaga), fork(rootUsersSaga)])
}