import { SAGA_GET_USERS, SET_USERS } from "./users.constants"

export const setUserList=(users) => {
    return {
        type:SET_USERS,
        payload:users,
    }
};

export const getUserList = () =>{
    return {type:SAGA_GET_USERS}
};