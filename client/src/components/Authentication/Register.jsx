import React from "react"
import RegisterForm from "./RegisterForm"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { notification } from "antd"
import { Redirect } from "react-router-dom"

const REGISTERUSER = gql`
    mutation RegisterUser($input: UserRegisterInput!) {
        registerUser(userInput: $input) {
            ID
        }
    }
`

const Register = () => {
    if (window.localStorage.getItem("jwtToken"))
        return <Redirect to="/dashboard" />
    const [registerUser] = useMutation(REGISTERUSER)

    const onSubmit = async data => {
        delete data.password2
        try {
            const result = await registerUser({
                variables: {
                    input: data
                }
            })
            notification["success"]({
                message: "registered",
                description: `${result.data.registerUser.ID}`
            })
            setTimeout(() => {
                return <Redirect to="/login" />
            }, 3000)
        } catch (er) {
            notification["error"]({
                message: "Failed register",
                description:
                    "This is the content of the notification. This is the content of the notification. This is the content of the notification."
            })
        }
    }

    return (
        <div>
            <RegisterForm onSubmit={onSubmit} />
        </div>
    )
}

export default Register
