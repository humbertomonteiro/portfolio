import { Component } from "react";


function Feed(props) {
    return (
        <div className='exemple' key={props.id}>
            <h3>{props.username}</h3>
            <a>
        
                {
                    props.curtidas < 1 ? 
                    props.curtidas + ' Curtida | ' : 
                    props.curtidas + ' Curtidas | '
                }
                {
                    props.comentarios < 1 ? 
                    props.comentarios + ' Comentário ' : 
                    props.comentarios + ' Comentários '
                }
            </a>
        </div>
    )
}

class RenderArrays extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feed: [
                {id: 1, username: 'Humberto', curtidas: 199, comentarios: 0},
                {id: 2, username: 'Fernanda', curtidas: 349, comentarios: 28},
                {id: 3, username: 'Jake', curtidas: 1400540, comentarios: 4872},
                {id: 4, username: 'Junior', curtidas: 0, comentarios: 2},
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>Users:</h2>
                {
                    this.state.feed.map((user) => {
                        return (
                            <Feed 
                                key={user.id}
                                username={user.username} 
                                curtidas={user.curtidas} 
                                comentarios={user.comentarios} 
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default RenderArrays