import { useState } from "react"

function UseState() {

    const [name, setName ] = useState('Humberto')

    let [tarefas, setTarefas] = useState(['Lavar a louça', 'Estudar Hooks'])

    const [input, setInput ] = useState('')

    function add() {
        setTarefas([...tarefas, input])
        setInput('')
    }

    return (
        <div className="exemple">
            <h2>Tarefas {name}</h2>
            <ul>
                {tarefas.map(tarefa => (

                    <li key={tarefa}>
                        {tarefa}
                    </li>
                ))}
            </ul>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button type="button" onClick={add}>Adicionar</button>
        </div>
    )
}

export default UseState