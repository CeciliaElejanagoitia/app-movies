import { mapToArray } from "../helpers/mapToArray"
import { SignUpForm, User } from "../types"
import { api } from "../utils/axios"

const add = async (userPrueba: SignUpForm) => {

    const response = await api.post('./users.json', userPrueba)

    return response.data
}

const get = async (): Promise<User[]> => {
    const response= await api.get('/users.json')
    return mapToArray(response.data)
}

const getBy = async (value: string, type: "email" | "token") => {
    const users = await get()

    const user = users.find((user) => user[type] === value)

    return user;
}

const update = ({ id, ...rest }: Partial<User>) => {
    const response = api.patch(`/users/${id}.json`, { ...rest })
}

export const servicesUser = { add, get, getBy, update }