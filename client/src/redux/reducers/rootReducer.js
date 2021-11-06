import themeReducer from "./themeReducer"
import serviceReducer from "./serviceReducer"
import roomReducer from "./roomReducer"
import authReducer from "./authReducer"
import bookingReducer from "./bookingReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  themeReducer,
  serviceReducer,
  roomReducer,
  bookingReducer,
  auth: authReducer,
})

export default rootReducer
