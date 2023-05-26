import React, {Component} from "react";

class RenderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            senha: '',
            sexo: ''
        }
    }

    trocaEmail(e) {
        this.setState({email: e.target.value})
    }
    trocaSenha(e) {
        this.setState({senha: e.target.value})
    }
    trocaSexo(e) {
        this.setState({sexo: e.target.value})
    }

    render() {
        return (
            <div className="exemple">
                <h2>Cadastro</h2>

                <h3>E-mail</h3>
                <input type="text" onChange={(e) => this.trocaEmail(e)} />

                <h3>Senha</h3>
                <input type="text" onChange={(e) => this.trocaSenha(e)} />

                <h3>Sexo</h3>
                <select name="" id="" onChange={(e) => this.trocaSexo(e)}>
                    <option value="">Selecione seu sexo</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>

                <h2>E-mail: {this.state.email}</h2>
                <h2>Senha: {this.state.senha}</h2>
                <h2>Sexo: {this.state.sexo}</h2>
            </div>
        )
    }
}

export default RenderForm