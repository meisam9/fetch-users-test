import { SAGA_GET_USER_DETAILS, SAGA_LOGIN_USER, SAGA_LOGOUT_USER, SET_USER_DATA } from "./user.constants"

export const loginUser = (user) => {
    return {
        type:SAGA_LOGIN_USER,
        payload:user
    }
}
export const setUserData = (user) => {
    return {
        type:SET_USER_DATA,
        payload:user
    }
}
export const logoutUser = () => {
    return {type:SAGA_LOGOUT_USER}
}

export const getUserDetais = (id) => {
    return {
        type:SAGA_GET_USER_DETAILS,
        payload:id
    }
}