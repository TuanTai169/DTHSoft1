import themeReducer from "./themeReducer"
import serviceReducer from "./serviceReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  themeReducer,
  serviceReducer,
})

export default rootReducer
