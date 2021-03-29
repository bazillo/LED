import {initialState} from "./initialState";
import {CONNECTION_SWITCH} from "./actionTypes";

export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case CONNECTION_SWITCH:
            return {
                ...state,
                connection: action.connection
            }
        default:
            return {...state}
    }
}