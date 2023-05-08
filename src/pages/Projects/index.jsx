import './projects.css'

import { motion } from 'framer-motion'

export default function Projects() {
    return(
        <motion.div 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: .5 }} className='projects-container'>
            <h1>Meus Projetos Pessoais</h1>
            <div className="projects">
                <div className="iten-projects">
                    <a href="https://humbertomonteiro.github.io/mata_mosquito/"
                    target='_blanck' className='iten-projects'>
                        <img src={require('../../assets/imgs/mata-mosquito.png')} alt="" />
                        <h2>Mata Mosquito</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </a>
                </div>
                <div className="iten-projects">
                    <a href="https://humbertomonteiro.github.io/my_finans/"
                    target='_blanck' className='iten-projects'>
                        <img src={require('../../assets/imgs/orcamento.png')} alt="" />
                        <h2>My Finans - Orçamento</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </a>
                </div>
                <div className="iten-projects">
                    <a href="https://humbertomonteiro.github.io/tia_nanda/"
                    target='_blanck' className='iten-projects'>
                        <img src={require('../../assets/imgs/tiaNanda.png')} alt="" />
                        <h2>Landing Page - Formando Futuros</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </a>
                </div>
                <div className="iten-projects">
                    <a href="https://humbertomonteiro.github.io/tophairssa/index.html"
                    target='_blanck' className='iten-projects'>
                        <img src={require('../../assets/imgs/topHair.png')} alt="" />
                        <h2>Landing Page - Top Hair</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </a>
                </div>
                <div className="iten-projects">
                    <a href="https://6380decf8f98a12e0dc6bf35--luminous-cranachan-d62d82.netlify.app/"
                    target='_blanck' className='iten-projects'>
                        <img src={require('../../assets/imgs/encurtarLink.png')} alt="" />
                        <h2>Encurtador de link</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript e React.js</p>
                    </a>
                </div>
                <div className="iten-projects">
                    <a href="https://humsfilms.netlify.app/"
                    target='_blanck' className='iten-projects'>
                        <img src={require('../../assets/imgs/humsFilms.png')} alt="" />
                        <h2>Hums Films</h2>
                        <h3>Tecnologias usadas:</h3>
                        <p>HTML, CSS, JavaScript e React.js</p>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}