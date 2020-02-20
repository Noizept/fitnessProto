const CLEAR = "JWT/CLEAR"
const DEFAULT_STATE = `Bearer ${localStorage.getItem("jwtToken")}`
const SET = "JWT/SET"

const jwtReducer = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SET:
            localStorage.setItem("jwtToken", `${action.jwt}`)
            return `Bearer ${action.jwt}`
        case CLEAR:
            localStorage.removeItem("jwtToken")
            return null
    }
    return state
}

export default jwtReducer

export const setJWT = jwt => {
    return { jwt, type: SET }
}
export const clearJWT = () => {
    return { type: CLEAR }
}
