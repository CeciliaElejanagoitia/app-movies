import { SignUpForm } from "../types"
import { api } from "../utils/axios"

const add = async (userPrueba: SignUpForm) => {

    const response = await api.post('./users.json', userPrueba)

    return response.data
}

const get = async () => {
    const response= await api.get('/users.json')
    return response.data
}
export const servicesUser = {add, get}