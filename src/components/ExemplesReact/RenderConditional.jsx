import { Component } from "react"

class RendenConditional extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    entrar() {
        this.setState({status: !this.state.status})
    }

    render() {
        return (
            <div className="exemple">
                {this.state.status ?
                    <h2>Bem vindo ao sistema!</h2> : 
                    <h2>Olá visitante, faça login.</h2>
                } 
                <div className="buttons">
                    <button onClick={() => this.entrar()}>
                        Click para entrar ou sair do sistema
                    </button>
                </div>
            </div>
        )
    }
}

export default RendenConditional