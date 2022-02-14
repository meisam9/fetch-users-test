import { SET_USERS } from "./users.constants";

export const initialUsersState = [];

export const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case SET_USERS:{
            return action.payload
        }
    
        default:
           return state;
    }
}