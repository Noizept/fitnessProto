import React from "react"
import styled from "styled-components"

import { useForm, Controller } from "react-hook-form"
import {
    Form,
    Button,
    Icon,
    Input,
    DatePicker,
    Select,
    InputNumber
} from "antd"
import { Link } from "react-router-dom"

const FormWrapper = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 5%;
    margin-bottom: 0px !important;
`
const ParagraphWarpper = styled.p`
    text-align: center;
`

const RegisterForm = ({ onSubmit }) => {
    const { control, handleSubmit, errors } = useForm()

    return (
        <FormWrapper>
            <ParagraphWarpper>LOGO HERE</ParagraphWarpper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Item
                    validateStatus={errors.email && "error"}
                    labelAlign="left"
                    style={{ marginBottom: "0px" }}
                    label="Email"
                >
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
                <Form.Item
                    style={{ marginBottom: "0px" }}
                    validateStatus={errors.password && "error"}
                    label="Password"
                >
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
                <Form.Item
                    style={{ marginBottom: "0px" }}
                    validateStatus={errors.password2 && "error"}
                    label="Repeat password"
                >
                    <Controller
                        rules={{ required: true, minLength: 6 }}
                        prefix={<Icon type="lock" theme="twoTone" />}
                        as={<Input.Password />}
                        name="password2"
                        type="password"
                        control={control}
                        defaultValue=""
                    />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "0px" }}
                    validateStatus={errors.fullName && "error"}
                    label="Full Name"
                >
                    <Controller
                        rules={{ required: true, minLength: 6 }}
                        prefix={<Icon type="lock" theme="twoTone" />}
                        as={<Input />}
                        name="fullName"
                        type="text"
                        control={control}
                        defaultValue=""
                    />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "0px", width: "25%" }}
                    validateStatus={errors.country && "error"}
                    label="country"
                >
                    <Controller
                        rules={{ required: true }}
                        as={
                            <Select>
                                <Select.Option value="PT">
                                    Portugal
                                </Select.Option>
                                <Select.Option value="ES">Spain</Select.Option>
                            </Select>
                        }
                        name="country"
                        control={control}
                    />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: "0px" }}
                    validateStatus={errors.birthDate && "error"}
                    label="BirthDate"
                >
                    <Controller
                        rules={{ required: true }}
                        as={<DatePicker />}
                        name="birthDate"
                        control={control}
                    />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: "0px", width: "25%" }}
                    validateStatus={errors.gender && "error"}
                    label="Gender"
                >
                    <Controller
                        rules={{ required: true }}
                        defaultValue="Male"
                        as={
                            <Select>
                                <Select.Option value="Male">Male</Select.Option>
                                <Select.Option value="Female">
                                    Female
                                </Select.Option>
                            </Select>
                        }
                        name="gender"
                        control={control}
                    />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "0px" }}
                    validateStatus={errors.weight && "error"}
                    label="weigth"
                >
                    <Controller
                        rules={{ required: true }}
                        as={<InputNumber />}
                        name="weigth"
                        control={control}
                    />
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: "0px" }}
                    validateStatus={errors.height && "error"}
                    label="height"
                >
                    <Controller
                        rules={{ required: true }}
                        as={<InputNumber />}
                        name="height"
                        control={control}
                    />
                </Form.Item>

                <ParagraphWarpper>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <Button type="link">
                        {<Link to="/login">Login</Link>}
                    </Button>
                    <br />
                    <Button type="link">Forgot password?</Button>
                </ParagraphWarpper>
            </form>
        </FormWrapper>
    )
}

export default RegisterForm
