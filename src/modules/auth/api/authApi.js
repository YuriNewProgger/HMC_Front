import { server } from "../../../api/api"


export const RegistrationURL = () => {
    return `${server}/auth/registration`
}