import { useState, useEffect } from "react";

export default function Api() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        function loadApi() {
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
            fetch(url)
                .then(resp => resp.json())
                .then(json => {
                    console.log(json)
                    setPosts(json)
                })

        }

        loadApi()
    }, [])

    return (
        <div className="exemple">
            <h2>Posts</h2>
            {
                posts.map(e => (
                    <article key={e.id}>
                        <strong>{e.titulo}</strong>
                        <img src={e.capa} alt="" />
                        <p>{e.subtitulo}</p>
                    </article>
                ))
            }
        </div>
    )
}