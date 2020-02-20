import React from "react"
import { useForm, Controller } from "react-hook-form"
import { Input, Icon } from "antd"

export default function Login() {
    const { control, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                prefix={<Icon type="user" />}
                as={<Input />}
                name="email"
                type="email"
                control={control}
                defaultValue=""
            />

            <input type="submit" />
        </form>
    )
}
