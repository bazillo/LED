import {CONNECTION_SWITCH, DEVICES_PUSH, HEIGHT_CHANGE, SEND_REQUIRED, WIDTH_CHANGE} from "./actionTypes";

export const ConnectionSwitchCreator = (connection) => {
    return{
        type: CONNECTION_SWITCH,
        connection
    }
}

export const DevicesPushCreator = (list) => {
    return{
        type: DEVICES_PUSH,
        list
    }
}

export const HeightChangeCreator = (height) => {
    return{
        type: HEIGHT_CHANGE,
        height
    }
}

export const WidthChangeCreator = (width) => {
    return{
        type: WIDTH_CHANGE,
        width
    }
}

export const SendRequiredCreator = (send_required)=>{
    return{
        type : SEND_REQUIRED,
        send_required
    }
}