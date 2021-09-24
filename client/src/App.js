import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import LoginPage from "./components/Login/LoginPage"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
