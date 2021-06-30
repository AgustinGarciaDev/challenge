import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";

const mainReducer = combineReducers({

    students: studentsReducer
})

export default mainReducer