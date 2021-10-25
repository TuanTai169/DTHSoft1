import * as types from "../constants/serviceConstant"
//import { error } from "react-notification-system-redux"

const initialState = {
  services: [],
  service: null,
  isLoading: false,
}
const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.GET_ALL_SERVICE:
      return {
        ...state,
        services: payload,
      }
    case types.SET_SERVICE_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    case types.SET_SERVICE_ERROR:
      return {
        ...state,
        services: [],
      }
    default:
      return state
  }
}

export default serviceReducer
