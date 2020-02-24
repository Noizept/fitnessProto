import React, { useEffect, useState, Fragment } from "react"
import { useQuery } from "@apollo/react-hooks"
import { useDispatch } from "react-redux"
import gql from "graphql-tag"
import { Redirect } from "react-router-dom"
import { setUser, clearUser } from "../../store/ducks/user"

export const MYSELF = gql`
    {
        myself {
            ID
            email
            role
            info {
                fullName
                gender
                country
            }
        }
    }
`
const LoggedInVerify = () => {
    const dispatch = useDispatch()
    const [loggedIn, setLoggedIn] = useState(true)
    useQuery(MYSELF, {
        context: {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        },
        onCompleted: data => {
            dispatch(setUser(data.myself))
            setLoggedIn(true)
        },
        onError: error => {
            localStorage.removeItem("jwtToken")
            dispatch(clearUser())
            setLoggedIn(false)
        }
    })
    if (loggedIn) return <Fragment></Fragment>
    return <Redirect to="/login" />
}

export default LoggedInVerify
