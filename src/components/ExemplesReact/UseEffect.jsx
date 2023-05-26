import { useState, useEffect } from "react"

function UseEffect() {

    const [name, setName ] = useState('Humberto')

    const [tarefas, setTarefas] = useState(['Lavar a louça', 'Estudar Hooks'])

    const [input, setInput ] = useState('')

    useEffect(() => {
        const getTarefas = localStorage.getItem('tarefas')

        if(getTarefas) {
            setTarefas(JSON.parse(getTarefas))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas])

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

export default UseEffect