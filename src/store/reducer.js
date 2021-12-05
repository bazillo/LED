import {initialState} from "./initialState";
import {CONNECTION_SWITCH, DEVICES_PUSH, HEIGHT_CHANGE, SEND_REQUIRED, WIDTH_CHANGE} from "./actionTypes";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case WIDTH_CHANGE:
            const width = parseInt(action.width)
            state.ledParams.width = width?width:0
            return {...state}
        case HEIGHT_CHANGE:
            const height = parseInt(action.height)
            state.ledParams.height = height?height:0
            return {...state}
        case SEND_REQUIRED:
            state.send_required = action.send_required
            return {...state}
        default:
            return {...state}
    }
}