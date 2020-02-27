import React from "react"
import { Redirect, Route } from "react-router-dom"
import AuthHealper from "../api/AuthHelper"
import { useSelector } from "react-redux"

const PrivateRoute = ({ component: Component, role, ...rest }) => {
    const user = useSelector(state => state.user)
    console.log(user)
    return (
        <Route
            {...rest}
            render={props => {
                return !AuthHealper.isAuthorized({ role }) ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }}
        />
    )
    /*>)
    if (!AuthHealper.isAuthorized({ role }))
        return <Route {...rest} render={props => <Redirect to="/login" />} />

    return <Route {...rest} render={props => <Component {...props} />} />*/
}

export default PrivateRoute
