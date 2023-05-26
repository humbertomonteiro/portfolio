import { Component } from "react"

class ClassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Humberto',
            contador: 0
        }

        this.diminuir = this.diminuir.bind(this)
    }

    diminuir() {
        let state = this.state
        state.contador -= 1 

        this.setState(state)
    }

    aumentar() {
        let state = this.state
        state.contador += 1

        this.setState(state)
    }

    render() {
        return (
            <div>
                <h4>Contador</h4>
                <div className="buttons">
                    <button onClick={this.diminuir}>Diminuir</button>
                    {this.state.contador}
                    <button onClick={() => this.aumentar()}>Aumentar</button>
                </div>
            </div>
        )
    }
}

export default ClassComponent