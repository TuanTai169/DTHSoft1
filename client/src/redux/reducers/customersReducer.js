import * as types from "../constants/CustomersConstant"
//import { error } from "react-notification-system-redux"

const initialState = {
  customers: [],
  customer: null,
  iscustomerLoading: false,
}
const customersReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.GET_ALL_CUSTOMERS:
      return {
        ...state,
        customers: payload,
      }
    case types.SET_CUSTOMERS_LOADING:
      return {
        ...state,
        iscustomerLoading: payload,
      }
    case types.SET_CUSTOMERS_ERROR:
      return {
        ...state,
        customers: [],
        iscustomerLoading: true,
      }
    case types.ADD_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, payload],
      }
    case types.DELETE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter((customer) => customer._id !== payload),
      }

    case types.UPDATE_CUSTOMERS:
      const newcustomers = state.customers.map((customer) =>
        customer._id === payload._id ? payload : customer
      )
      return {
        ...state,
        customers: newcustomers,
      }
    case types.FIND_CUSTOMERS:
      return {
        ...state,
        customer: payload,
      }
    default:
      return state
  }
}

export default customersReducer
