import './profile.css'

import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import Carrossel from '../../components/Carrossel'
import Slider from '../../components/Slider'

import { motion } from 'framer-motion'

export default function Profile() {
    return(
        <motion.div 
        initial={{ y: -100 }} 
        animate={{ y: 0 }}
        transition={{ duration: .5 }} 
        className='profile-container'>

            <div className='article article-img'>
                <div>
                    <img className='photo' src={require('../../assets/imgs/perfil.jpg')} alt="" />
                </div>
                <div className="">
                    <div className='profile'>
                        <h2>Perfil</h2>
                        <ul>
                            <li><strong>Nome:</strong> Humberto Monteiro Araújo Filho</li>
                            <li><strong>Idade:</strong> 25 anos</li>
                            <li><strong>Estado civil:</strong> Casado</li>
                            <li><strong>Cidade:</strong> Fortaleza / CE</li>
                            <li><strong>Email:</strong> bertohf5@gmail.com</li>
                            <li><strong>Escolaridade:</strong> Ensino médio completo</li>
                        </ul>
                    </div>
                    <div className='contacts'>
                        <h2>Contatos</h2>
                        <div className="contacts-links">
                            <a href="https://www.instagram.com/humberto.fh/" 
                            target='_blanck'><span>Instagram</span> <AiOutlineInstagram/></a>
                            
                            <a href="https://github.com/humbertomonteiro"
                            target='_blanck'><span>GitHub</span> <AiFillGithub/></a>
                            
                            <a href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/"
                            target='_blanck'><span>Linkedin</span> <AiFillLinkedin/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="article">
                <div className='about'>
                    <h2>Sobre</h2>
                    <p>
                    Desenvolvedor Front-End com experiência em criação de interfaces interativas e responsivas, 
                    buscando contribuir para projetos desafiadores.
                    </p>
                    <p>
                    Habilidades em HTML5, CSS3, JavaScript, React, 
                    bem como conhecimentos em design responsivo e boas práticas de desenvolvimento. Excelente 
                    capacidade de trabalhar em equipe, resolver problemas e adaptar-se a novas tecnologias rapidamente.
                    </p>
                </div>
            </div>

            <div className="article">
                <Carrossel />
            </div>
            
            <div className="article">
                <div className='courses'>
                    <h2>Cursos</h2>
                    <div className='course'>
                        <h3>Web moderno</h3>
                        <ul>
                            <li>Instituição: Udemy / Cod3r</li>
                            <li>Professor: Leonardo Leitão</li>
                        </ul>
                        <p>Tecnologias:</p>
                        <p>
                            Javascript, Angular, React, Next, Vue, Node, HTML, CSS, jQuery, Bootstrap, Webpack,
                            Gulp, MySQL
                        </p>
                    </div>
                    <div className='course'>
                        <h3>Web completo</h3>
                        <ul>
                            <li>Instituição: Udemy</li>
                            <li>Professor: Jorge Sant Ana / Jamilton Damasceno</li>
                        </ul>
                        <p>Tecnologias:</p>
                        <p>
                            HTML5, CSS3, SASS, Bootstrap, JS, ES6, MySQL, JQuery, MVC, APIs, IONIC
                        </p>
                    </div>

                </div>
            </div>
            <div className="article">
                <ul className='specialties'>
                    <h2>Especialidades</h2>
                    <li>Sites</li>
                    <li>Blogs</li>
                    <li>Sistemas</li>
                </ul>
            </div>
            <Slider />
        </motion.div>
    )
}