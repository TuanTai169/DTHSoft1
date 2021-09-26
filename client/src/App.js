import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import AuthContextProvider from "./contexts/AuthContext"
import LoginPage from "./components/Login/LoginPage"

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={HomePage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  )
}

export default App
