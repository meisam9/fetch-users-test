import { combineReducers } from "redux";

//reducers
import { userReducer } from "./User/user.reducer";
import { usersReducer } from "./Users/users.reducer";

export const reducers = combineReducers({
    user:userReducer,
    users:usersReducer,
})
