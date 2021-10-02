import "./loginPage.css"
import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function LoginPage() {
  //Context
  const { loginUser } = useContext(AuthContext)

  //Route
  const history = useHistory()

  //Local State
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const { email, password } = login

  const onChangeLogin = (event) =>
    setLogin({ ...login, [event.target.name]: event.target.value })

  const onLogin = async (event) => {
    event.preventDefault()

    try {
      const loginData = await loginUser(login)
      if (loginData.success) {
        console.log(loginData)
        history.push("/dashboard")
      }
      console.log(loginData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form className="login-form" autoComplete="off" onSubmit={onLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChangeLogin}
        />
        <div className="input-icon">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChangeLogin}
          />
          <i className="fa fa-eye show-password"></i>
        </div>
        <Link to="#" className="forgot">
          Forgot password?
        </Link>
        <button type="submit">Sign in</button>
      </form>
    </>
  )
}

export default LoginPage
