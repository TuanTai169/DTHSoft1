import React, { useEffect } from "react"

import "./layout.css"

import Sidebar from "../Sidebar/Sidebar"
import TopNav from "../Topnav/TopNav"

import Dashboard from "../../containers/Dashboard/Dashboard"
import Customers from "../../containers/Customer/Customers"
import Services from "../../containers/Service/Services"
import Rooms from "../../containers/Room/Rooms"
import NotFound from "../Common/NotFound/NotFound"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import themeAction from "../../redux/actions/themeAction"

const Layout = () => {
  const themeReducer = useSelector((state) => state.themeReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light")
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light")
    dispatch(themeAction.setMode(themeClass))
    dispatch(themeAction.setColor(colorClass))
  }, [dispatch])

  return (
    <>
      <Router>
        <Route
          render={(props) => (
            <div
              className={`layout ${themeReducer.mode} ${themeReducer.color}`}
            >
              <Sidebar {...props} />
              <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                  <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/services" component={Services} />
                    <Route path="/rooms" component={Rooms} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          )}
        />
      </Router>
    </>
  )
}

export default Layout