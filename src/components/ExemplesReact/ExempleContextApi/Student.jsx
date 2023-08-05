
import Name from "./Name"

import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Student() {

    const { setName } = useContext(UserContext)
    return (
        <div>
            <h2>Componente Alunos</h2>
            <Name />
            <button onClick={() => setName('Fernanda')}>Mudar nome</button>
        </div>
    )
}