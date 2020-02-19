import React from "react"
import { useForm } from "react-hook-form"
import { Form, Input, Icon, Tooltip, Row, Button } from "antd"
import styled from "styled-components"

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
                name="email"
             type="email"
                ref={register({ required: true })}
                placeholder="Enter your username"
                prefix={<Icon type="mail" theme="twoTone" />}
                suffix={
                    <Tooltip title="Extra information">
                        <Icon type="info-circle" />
                    </Tooltip>
                }
            />
            <Button type="submit" htmlType="submit">
                aaa
            </Button>
        </FormWrapper>
    )
}

export default Login
