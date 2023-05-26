import { Component } from "react";

class CicleLife extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hora: '00:00:00'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000)
    }

    render() {
        return(
            <div className="exemple">
                <h3>Hora</h3>
                <h4>{this.state.hora}</h4>
            </div>
        )
    }
}



export default CicleLife