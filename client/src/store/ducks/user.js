const CLEAR = "USER/CLEAR"
const DEFAULT_STATE = {}
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
