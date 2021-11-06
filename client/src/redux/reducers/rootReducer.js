import themeReducer from "./themeReducer"
import serviceReducer from "./serviceReducer"
import roomReducer from "./roomReducer"
import authReducer from "./authReducer"
import bookingReducer from "./bookingReducer"
import customersReducer from "./customersReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  themeReducer,
  serviceReducer,
  roomReducer,
  bookingReducer,
  customersReducer,
  auth: authReducer,
})

export default rootReducer
