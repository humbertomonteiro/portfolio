import './Home.css'

import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Carrossel from '../../components/Carrossel'
// import CarrosselTow from '../../components/Carrossel-2'
import Slider from '../../components/Slider'

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
                    
                    <span className='home-span'>
                        Olá, me chamo
                    </span>

                    <h1 className='home-name'>Humberto Monteiro</h1>

                    <h3 className='home-text'>
                        Sou Desenvolvedor Web <br />
                        Front-end
                    </h3>

                    <p>
                        Habilidades em HTML5, CSS3, JavaScript, React, 
                        bem como conhecimentos em design responsivo e boas práticas de desenvolvimento. Excelente 
                        capacidade de trabalhar em equipe, resolver problemas e adaptar-se a novas tecnologias rapidamente.
                    </p>
                </motion.div>
                <motion.div
                initial={{ x: 100 }}
                animate={{ x:0 }}
                transition={{ duration: .5 }}
                className='home-content-btn'>
                    <a className='btn-1' href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/" target='_blanck'><AiFillLinkedin/></a>
                    
                    <a className='btn-1' href="https://github.com/humbertomonteiro" target='_blanck'><AiOutlineGithub/></a>
                    
                    <a className='btn-1' href="https://www.instagram.com/humberto.fh/" target='_blanck'><AiFillInstagram/></a>
                    
                    <Link 
                    to='/profile'
                    className='btn-2'>
                        Portfolio
                    </Link>

                </motion.div>
            </div>
            <div className='home-img'>
                <img src={require('../../assets/imgs/bg/img-home.png')} alt="" />
            </div>
            {/* <CarrosselTow /> */}
            <Carrossel />
            <Slider />
        </section>
    )
}