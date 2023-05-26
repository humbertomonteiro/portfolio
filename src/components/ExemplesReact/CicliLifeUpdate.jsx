import { Component } from "react"

class CicleLifeUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            update: 'Atualizar'
        }
    }

    atualizar() {
        this.setState({ update: 'Atualizado' })
    }

    componentDidUpdate() {
        const update = document.querySelector('#update')
        update.innerText = `Quando atualizou o nome do botão eu apareci 
        por causa do componentDidUpdate()`
    }

    render() {
        return(
            <div className="exemple">
                <h3>Click</h3>

                <div className="buttons">
                    <button onClick={() => this.atualizar()}>
                        {this.state.update}
                    </button>
                </div>

                <h4 id="update">Veja atualizar</h4>
            </div>
        )
    }
}

export default CicleLifeUpdate