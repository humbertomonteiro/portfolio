import './notes.css'

import { DiReact, DiNodejsSmall } from 'react-icons/di'
import { AiFillGithub } from 'react-icons/ai'
import { SiFirebase } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

export default function Notes() {
    return(
        <motion.div 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: .5 }} className='notes-container'>
            <h1>Minhas anotações</h1>
            <div className="notes">

                <div className="note">
                    <div className="note-icon">
                        <BsGit className='icon'/>
                    </div>
                    <div className="note-text">
                        <h2>Git</h2>
                        <p>
                            Sistema de controle de versão, projetado para 
                            lidar com tudo, desde projetos pequenos a 
                            muito grandes com velocidade e eficiência.
                        </p>
                        <div className='note-btn'>
                            <Link  to='/git'>Abrir</Link>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-icon">
                        <AiFillGithub className='icon'/>
                    </div>
                    <div className="note-text">
                        <h2>Git Hub</h2>
                        <p>
                            Aproveitado para a produtividade. 
                            Projetado para colaboração. Celebrado 
                            pela segurança integrada. 
                        </p>
                        <div className='note-btn'>
                            <Link to='/github'>Abrir</Link>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-icon">
                        <DiNodejsSmall className='icon'/>
                    </div>
                    <div className="note-text">
                        <h2>Node JS</h2>
                        <p>
                            É um ambiente de tempo de execução 
                            JavaScript multiplataforma e de código.
                        </p>
                        <div className='note-btn'>
                            <Link to='/node'>Abrir</Link>
                        </div>
                        
                    </div>
                </div>

                <div className="note">
                    <div className="note-icon">
                        <DiReact className='icon'/>
                    </div>
                    <div className="note-text">
                        <h2>React JS</h2>
                        <p>
                            permite que você crie interfaces de 
                            usuário a partir de peças individuais 
                            chamadas componentes. 
                        </p>
                        <div className='note-btn'>
                            <Link to='/react'>Abrir</Link>
                        </div>
                    </div>
                </div>

                
                <div className="note">
                    <div className="note-icon">
                        <SiFirebase className='icon'/>
                    </div>
                    <div className="note-text">
                        <h2>Firebase</h2>
                        <p>
                            Uma plataforma de desenvolvimento de 
                            aplicativos que ajuda você a criar e 
                            desenvolver aplicativos e jogos.
                        </p>
                        <div className='note-btn'>
                            <Link to='/firebase'>Abrir</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    )
}