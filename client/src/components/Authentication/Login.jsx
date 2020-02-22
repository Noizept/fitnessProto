import React from "react"
import { Link, Redirect } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Input, Icon, Form, Button, notification } from "antd"
import styled from "styled-components"

const FormWrapper = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 20%;
`
const ParagraphWarpper = styled.p`
    text-align: center;
`
const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        loginUser(email: $email, password: $password)
    }
`

export default function Login(props) {
    const { control, handleSubmit, errors } = useForm()
    const [loginUser] = useMutation(LOGIN)

    const onSubmit = async ({ email, password }) => {
        try {
            const result = await loginUser({
                variables: { email, password }
            })
            const { data } = result
            localStorage.setItem("jwtToken", `Bearer ${data.loginUser}`)
            props.history.push("/dashboard")
        } catch (error) {
            notification["error"]({
                message: "Failed Login",
                description: `${JSON.stringify(error.message)}`
            })
        }
    }
    return (
        <FormWrapper>
            <ParagraphWarpper>LOGO HERE</ParagraphWarpper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Item validateStatus={errors.email && "error"}>
                    <Controller
                        rules={{ required: true }}
                        prefix={<Icon type="mail" theme="twoTone" />}
                        as={<Input />}
                        name="email"
                        type="email"
                        control={control}
                        defaultValue=""
                    />
                </Form.Item>
                <Form.Item validateStatus={errors.password && "error"}>
                    <Controller
                        rules={{ required: true, minLength: 6 }}
                        prefix={<Icon type="lock" theme="twoTone" />}
                        as={<Input.Password />}
                        name="password"
                        type="password"
                        control={control}
                        defaultValue=""
                    />
                </Form.Item>
                <ParagraphWarpper>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Button type="link">
                        {<Link to="/signup"></Link>}Signup
                    </Button>
                    <br />
                    <Button type="link">Forgot password?</Button>
                </ParagraphWarpper>
            </form>
        </FormWrapper>
    )
}
