import {  SET_USER_DATA } from "./user.constants";

export const initialUserState = {
    token:'',
    user:{},
    message:'',
};
export const userReducer = (state= initialUserState,action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return  {
                ...state ,
                ...action.payload
                }
        }
    
        default: {
            return state;
        }
    }
}