import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import "./assets/boxicons-2.0.7/css/boxicons.min.css"
import "./assets/css/grid.css"
import "./assets/css/theme.css"
import "./assets/css/index.css"
import App from "./App"

document.title = "DTHSOFT"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
