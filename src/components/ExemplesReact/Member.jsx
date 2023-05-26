import { Component } from "react"

class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: props.nome
        }
    }

    entrar(nome) {
        this.setState({ nome: nome})
    }

    render() {
        return (
            <div className='exemple div-buttons'>
                <div className="buttons">
                    <button onClick={() => this.entrar('Humberto')}>
                        Entrar no sistema
                    </button>

                    <button onClick={() => this.setState({nome: 'Visitante'})}>
                        Sair
                    </button>
                </div>
                    <h2>Bem-vindo(a) {this.state.nome}</h2>
            </div>
            
        )
    }
}

export default Member