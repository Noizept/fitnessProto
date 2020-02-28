import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { clearUser } from "../../../store/ducks/user"

import styled from "styled-components"

const FormWrapper = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 20%;
`
const ParagraphWarpper = styled.p`
    text-align: center;
`

const Logout = () => {
    const dispatch = useDispatch()
    dispatch(clearUser())
    localStorage.removeItem("jwtToken")
    return (
        <FormWrapper>
            <ParagraphWarpper>LOGO HERE</ParagraphWarpper>
            <ParagraphWarpper>
                <Link to="/login">Back to Login</Link>
            </ParagraphWarpper>
        </FormWrapper>
    )
}

export default Logout
