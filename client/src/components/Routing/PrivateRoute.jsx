import React from "react"
import { Redirect, Route } from "react-router-dom"
import AuthHealper from "../../api/AuthHelper"
import { useSelector } from "react-redux"

const PrivateRoute = ({ component: Component, role, ...rest }) => {
    const user = useSelector(state => state.user)
    console.log(AuthHealper.isLogged({ user }))
    console.log(AuthHealper.isAuthorized({ role, user }))

    return (
        <Route
            {...rest}
            render={props => {
                if (!AuthHealper.isLogged({ user }))
                    return <Redirect to="/login" />

                if (!AuthHealper.isAuthorized({ role, user }))
                    props.history.goBack()

                return <Component {...props} />
            }}
        />
    )
}

export default PrivateRoute
