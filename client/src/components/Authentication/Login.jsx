import React from "react"
import { useForm } from "react-hook-form"
import { Form, Input, Icon, Tooltip, Row } from "antd"
import styled from "styled-components"

const LoginRow = styled.div`
    display: flex;
    height: 100%;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
`
const FormWrapper = styled.form`
    display: flex;
    height: 100%;
    margin-left: 20%;
    margin-right: 30%;
    font-family: "Cairo";
`

const Login = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="email"
                placeholder="Enter your username"
                prefix={<Icon type="mail" theme="twoTone" />}
                suffix={
                    <Tooltip title="Extra information">
                        <Icon type="info-circle" />
                    </Tooltip>
                }
            />
        </FormWrapper>
    )
}

export default Login
