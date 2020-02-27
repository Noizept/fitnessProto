import graphqlClient from "./graphqlClient"
import gql from "graphql-tag"
import _ from "lodash"

const MYSELF = gql`
    {
        myself {
            ID
            role
        }
    }
`

export default class AuthHelper {
    static async isAuthorized({ role }) {
        if (!localStorage.getItem("jwtToken")) return false

        try {
            const { data } = await graphqlClient.query({
                query: MYSELF,
                context: {
                    headers: {
                        authorization: localStorage.getItem("jwtToken")
                    }
                }
            })
            return _.includes(data.myself.role, role) ? true : false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static isLogged() {
        if (!localStorage.getItem("jwtToken")) return false
        return true
    }
}
