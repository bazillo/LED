import {createStore} from "redux";
import {reducer} from "./reducer";


export var store = createStore(reducer);