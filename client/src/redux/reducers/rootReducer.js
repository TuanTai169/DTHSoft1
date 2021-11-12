import themeReducer from "./themeReducer"
import serviceReducer from "./serviceReducer"
import roomReducer from "./roomReducer"
import authReducer from "./authReducer"
import bookingReducer from "./bookingReducer"
import customerReducer from "./customerReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  themeReducer,
  serviceReducer,
  roomReducer,
  bookingReducer,
  customerReducer,
  auth: authReducer,
})

export default rootReducer
