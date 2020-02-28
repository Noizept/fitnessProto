import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import PrivateRoute from "./PrivateRoute"

import Login from "../Pages/auth/Login"
import Logout from "../Pages/auth/Logout"
import Register from "../Pages/auth/Register"

import Dashboard from "../Dashboard/Dashboard"
import Admin from "../Pages/admin/Admin"

import App from "../App"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <ProtectedRoute component={Dashboard} path="/dashboard" />
                <PrivateRoute component={Admin} path="/admin" role="ADMIN" />
                <Route component={Logout} path="/logout" />
                <Route component={Register} path="/signup" />
                <Route component={Login} path="/login" />
                <Route component={App} path="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
