import jwtDecode from "jwt-decode"
const CLEAR = "USER/CLEAR"
const DEFAULT_STATE = localStorage.getItem("jwtToken")
    ? jwtDecode(localStorage.getItem("jwtToken").split(" ")[1])
    : {}
const SET = "USER/SET"

const UserReducer = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SET:
            return action.user
        case CLEAR:
            return {}
    }
    return state
}

export default UserReducer

export const setUser = user => {
    return { user, type: SET }
}
export const clearUser = () => {
    return { type: CLEAR }
}
