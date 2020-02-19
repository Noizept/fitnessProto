const CLEAR = "JWT/CLEAR"
const DEFAULT_STATE = localStorage.getItem('jwtToken')
const SET = "JWT/SET"

const jwtReducer = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SET:
            return action.jwt
        case CLEAR:
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
