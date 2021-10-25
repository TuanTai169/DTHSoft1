import * as types from "../constants/serviceConstant"
import axios from "axios"
import { BASE_API_URL } from "./../constants/api"

// READ ALL Service
export const getAllService = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_SERVICE_LOADING, payload: true })

      const response = await axios.get(`${BASE_API_URL}/service`)
      console.log(response)
      if (response.data.success) {
        dispatch({
          type: types.GET_ALL_SERVICE,
          payload: response.data.services,
        })
      }
    } catch (error) {
      dispatch({ type: types.SET_SERVICE_ERROR })
    } finally {
      dispatch({ type: types.SET_SERVICE_LOADING, payload: true })
    }
  }
}

export const setAllService = (services) => {
  return {
    type: types.GET_ALL_SERVICE,
    payload: services,
  }
}
