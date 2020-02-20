import React, { Fragment } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Redirect } from "react-router-dom"
import Login from "./Login"

export const MYSELF = gql`
    {
        myself {
            ID
        }
    }
`
export default function LoggedInVerify() {
    
    const { data, error } = useQuery(MYSELF)
    if (error) return <Redirect to="/login" />
    return <Fragment></Fragment>
}
