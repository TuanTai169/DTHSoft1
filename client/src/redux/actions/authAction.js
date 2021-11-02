import axios from "axios"
import * as types from "../constants/authConstant"
// import { createSlice } from "@reduxjs/toolkit"
import setAuthToken from "./../../utils/setAuthToken"
import { toast } from "react-toastify"

// const initialState = {
//   accessToken: null,
//   user: null,
//   success: null,
//   message: null,
// }

// const auth = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess(state, action) {
//       state.accessToken = action.payload.accessToken
//     },
//     userSuccess(state, action) {
//       state.user = action.payload.user
//     },
//     messageSuccess(state, action) {
//       state.message = action.payload.message
//     },
//   },
// })

// const { loginSuccess } = auth.actions
// const { userSuccess } = auth.actions
// const { messageSuccess } = auth.actions

//LOAD USER
export const loadUser = () => {
  return async (dispatch) => {
    if (localStorage["token"]) {
      setAuthToken(localStorage["token"])
    }
    try {
      const response = await axios.get(`http://localhost:5000/api/auth`)
      if (response.data.success) {
        dispatch({
          type: types.SET_AUTH,
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        })
      }
    } catch (error) {
      localStorage.removeItem("token")
      setAuthToken(null)
      dispatch({
        type: types.SET_AUTH,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      })
    }
  }
}
//LOGIN
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })
      if (res.data.success) {
        localStorage.setItem("token", res.data.accessToken)
        // dispatch(loginSuccess(res.data))
        // dispatch(userSuccess(res.data))
        // dispatch(messageSuccess(res.data))
        dispatch(loadUser())
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    }
  }

//LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("token")
  setAuthToken(null)
  dispatch({
    type: types.SET_AUTH,
    payload: {
      isAuthenticated: false,
      user: null,
    },
  })
  toast.success("User logout successfully !")
}

// export default auth.reducer
