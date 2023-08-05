


import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Name() {

    const { name } = useContext(UserContext)
    return (
        <div>
            <span>Seja bem vindo: {name}</span>
        </div>
    )
}


