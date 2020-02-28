import React from "react"
import { Redirect, Route } from "react-router-dom"
import AuthHealper from "../../api/AuthHelper"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user)
    

    return (
        <Route
            {...rest}
            render={props => {
                return !AuthHealper.isLogged({ user }) ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }}
        />
    )
}

export default ProtectedRoute
