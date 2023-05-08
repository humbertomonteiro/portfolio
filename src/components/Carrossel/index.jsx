import './carrossel.css'

import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

export default function Carrossel() {

    const carrossel = useRef()
    const [ width, setWidth ] = useState(0)

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth,
            carrossel.current?.offsetWidth)
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    return(
        <section className='carrossel-container'>  
            <h1>Meus Projetos Pessoais</h1> 
            <div className="div-carrossel">
                <motion.div ref={carrossel} className='carrossel' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                    className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width}}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>
                        <motion.div className="item">
                        <img src={require('../../assets/imgs/mata-mosquito.png')} alt="" />
                            <a href="https://humbertomonteiro.github.io/mata_mosquito/"
                            target='_blanck'>
                                <h2>Mata Mosquito</h2>
                                <h3>Tecnologias usadas:</h3>
                                <p>HTML, CSS, JavaScript</p>
                            </a>
                        </motion.div>
                        <motion.div className="item">
                            <img src={require('../../assets/imgs/orcamento.png')} alt="" />
                            <a href="https://humbertomonteiro.github.io/my_finans/"
                            target='_blanck'>
                
                                <h2>My Finans - Orçamento</h2>
                                <h3>Tecnologias usadas:</h3>
                                <p>HTML, CSS, JavaScript</p>
                            </a>
                        </motion.div>
                        <motion.div className="item">
                            <img src={require('../../assets/imgs/tiaNanda.png')} alt="" />
                            <a href="https://humbertomonteiro.github.io/tia_nanda/"
                            target='_blanck'>
                
                                <h2>Landing Page - Formando Futuros</h2>
                                <h3>Tecnologias usadas:</h3>
                                <p>HTML, CSS, JavaScript</p>
                            </a>
                        </motion.div>
                        <motion.div className="item">
                            <img src={require('../../assets/imgs/topHair.png')} alt="" />
                            <a href="https://humbertomonteiro.github.io/tophairssa/index.html"
                            target='_blanck'>
                
                                <h2>Landing Page - Top Hair</h2>
                                <h3>Tecnologias usadas:</h3>
                                <p>HTML, CSS, JavaScript</p>
                            </a>
                        </motion.div>
                        <motion.div className="item">
                            <img src={require('../../assets/imgs/encurtarLink.png')} alt="" />
                            <a href="https://6380decf8f98a12e0dc6bf35--luminous-cranachan-d62d82.netlify.app/"
                            target='_blanck'>
                
                                <h2>Encurtador de link</h2>
                                <h3>Tecnologias usadas:</h3>
                                <p>HTML, CSS, JavaScript e React.js</p>
                            </a>
                        </motion.div>
                        <motion.div className="item">
                            <img src={require('../../assets/imgs/humsFilms.png')} alt="" />
                            <a href="https://humsfilms.netlify.app/"
                            target='_blanck'>
                
                                <h2>Hums Films</h2>
                                <h3>Tecnologias usadas:</h3>
                                <p>HTML, CSS, JavaScript e React.js</p>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}