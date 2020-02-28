import _ from "lodash"

export default class AuthHelper {
    static isAuthorized({ role, user }) {
        return _.includes(user.roles, role) ? true : false
    }

    static isLogged({ user }) {
        if (!localStorage.getItem("jwtToken")) return false
        if (!user) return false

        const [TOKEN_EXP, CURRENT_DATE] = [
            new Date(user.exp * 1000),
            new Date()
        ]
        if (TOKEN_EXP < CURRENT_DATE) {
            localStorage.removeItem("jwtToken")
            return false
        }
        return true
    }
}
