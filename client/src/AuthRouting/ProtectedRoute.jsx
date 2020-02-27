import React from "react"
import { Redirect, Route } from "react-router-dom"
import AuthHealper from "../api/AuthHelper"

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return !AuthHealper.isLogged() ? (
                <Redirect to="/login" />
            ) : (
                <Component {...props} />
            )
        }}
    />
)

export default ProtectedRoute
