import {CONNECTION_SWITCH} from "./actionTypes";

export const ConnectionSwitchCreator = (connection) => {
    return{
        type: CONNECTION_SWITCH,
        connection
    }
}