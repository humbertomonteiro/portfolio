import './Home.css'

import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from 'react-icons/ai'

import Carrossel from '../../components/Carrossel'

import { motion } from 'framer-motion'

export default function Home() {
    return (
        <section className="home-container">
            <div className='home-content'>
                <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: .5 }}
                className='home-content-text'>
                    
                    <h3 className='home-text'>
                        Olá, me chamo
                    </h3>

                    <h1 className='home-name'>Humberto Monteiro</h1>

                    <h3 className='home-text'>
                        Sou estudante de Programação!
                    </h3>

                    <p>
                        Estou procurando entrar nesse mundo com uma experiencia profissional para
                        poder mostrar o que eu aprendi com os cursos e projetos pessoais que já fiz e quero principalmente
                        aprender mais e mais, até me tornar um desenvolvedor full-stack.
                    </p>
                </motion.div>
                <motion.div
                initial={{ x: 100 }}
                animate={{ x:0 }}
                transition={{ duration: .5 }}
                className='home-content-btn'>
                    <a href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/" target='_blanck'><AiFillLinkedin/></a>
                    <a href="https://github.com/humbertomonteiro" target='_blanck'><AiOutlineGithub/></a>
                    <a href="https://www.instagram.com/humberto.fh/" target='_blanck'><AiFillInstagram/></a>
                </motion.div>
            </div>
            <div className='home-img'>
                <img src={require('../../assets/imgs/bgHome.png')} alt="" />
            </div>
            <Carrossel />
        </section>
    )
}