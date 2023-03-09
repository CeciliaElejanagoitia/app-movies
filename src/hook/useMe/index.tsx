import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { servicesUser } from "../../services/users"
import { LoginForm, User } from "../../types"

const useMe = () => {

    // const [me, setMe] = useState<Partial<User>>()
    const {me, setMe} = useContext(AuthContext)

    useEffect(() => {
        loginWithToken()
    }, [])

    const login = async ( {email, pass}: LoginForm ) => {
        const { id, name, lastname, password} = await servicesUser.getBy(email, 'email') as User;

        if(password === pass) {
            const token = tokenGenerator()

            servicesUser.update({ id, token })
            
            localStorage.setItem("token", token)

            setMe({ id, name, lastname, email })
        } else {
        }
    }
    const signup = (user: Omit<User, 'id'>) => {

    }
    const forgotPassword = () => {

    }
    const loginWithToken = async () => {
        const token = localStorage.getItem('token')

        if(token && !me) {
            const user = (await servicesUser.getBy(token, 'token')) as User;
            if(user) {
                setMe ({ id: user.id, name: user.name, lastname: user.lastname, email: user.email })
            }
        }
    }
    const logout = async () => {
        await servicesUser.update({ id: me?.id, token: null });
        setMe(undefined)
    }

    return{ me, login, signup, forgotPassword, loginWithToken, logout }
}

export { useMe }