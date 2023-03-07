import { FC } from "react"



const withAuth = (Component: FC): FC => {

    const Authenticated = () => {
        return <Component />
    }

    return Authenticated

}

export { withAuth }