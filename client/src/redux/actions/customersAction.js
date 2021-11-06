import * as types from "../constants/CustomersConstant"
import axios from "axios"
import { toast } from "react-toastify"
//import { BASE_API_URL } from "./../constants/api"
//import { LOCAL_API_URL } from "./../constants/api"

// READ ALL cus
export const getAllCustomers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_CUSTOMERS_LOADING, payload: true })

      const response = await axios.get(`https://dth-soft-app.herokuapp.com/api/customer`)
      if (response.data.success) {
        dispatch({
          type: types.GET_ALL_CUSTOMERS,
          payload: response.data.customers,
        })
      }
    } catch (error) {
      toast.error(error)
      dispatch({ type: types.SET_CUSTOMERS_ERROR })
    }
  }
}

// READ 1 cus
export const findCustomers = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://dth-soft-app.herokuapp.com/api/customer/${id}`)

      if (response.data.success) {
        dispatch({
          type: types.FIND_CUSTOMERS,
          payload: response.data.customer,
        })
      }
    } catch (error) {
      dispatch({ type: types.SET_CUSTOMERS_ERROR })
      toast.error("Sever Error")
    }
  }
}

// ADD cus
export const addCustomers = (newCustomers) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`https://dth-soft-app.herokuapp.com/api/customer`, newCustomers)
      if (response.data.success) {
        dispatch({
          type: types.ADD_CUSTOMERS,
          payload: response.data.customer,
        })
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
}

// DELETE cuss
export const deleteCustomers = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://dth-soft-app.herokuapp.com/api/customer/delete/${id}`)
      if (response.data.success) {
        dispatch({
          type: types.DELETE_CUSTOMERS,
          payload: id,
        })
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
}

export const updateCustomer = (updateCustomer) => {
  return async (dispatch) => {
    try {
      console.log("updateCustomer",updateCustomer)
      const response = await axios.put(
        `https://dth-soft-app.herokuapp.com/api/customer/update/${updateCustomer._id}`,
        updateCustomer
      )
      if (response.data.success) {
        dispatch({
          type: types.UPDATE_CUSTOMERS,
          payload: response.data.updatedCustomer,
        })
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
}
