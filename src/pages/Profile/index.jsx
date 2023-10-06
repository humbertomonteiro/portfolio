import "./profile.css";

import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
} from "react-icons/ai";

import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql, SiNextdotjs } from "react-icons/si";

import CarrosselProjects from "../../components/carrossels/CarrosselProjects";
import CarrosselNotes from "../../components/carrossels/CarrosselNotes";

import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="profile-container"
    >
      <div className="article article-img">
        <div className="photo">
          <img src={require("../../assets/imgs/perfil.jpg")} alt="" />
          <div>
            <AiFillHtml5 />
            <IoLogoCss3 />
            <IoLogoJavascript />
            <FaReact />
            <SiNextdotjs />
            <FaNodeJs />
            <IoLogoFirebase />
            <GrMysql />
            <SiPostgresql />
          </div>
        </div>
        <div className="">
          <div className="profile">
            <h2>Perfil</h2>
            <ul>
              <li>
                <strong>Nome:</strong> Humberto Monteiro Araújo Filho
              </li>
              <li>
                <strong>Idade:</strong> 25 anos
              </li>
              <li>
                <strong>Estado civil:</strong> Casado
              </li>
              <li>
                <strong>Cidade:</strong> Fortaleza / CE
              </li>
              <li>
                <strong>Email:</strong> bertohf5@gmail.com
              </li>
              <li>
                <strong>Escolaridade:</strong> Ensino médio completo
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h2>Contatos</h2>
            <div className="contacts-links">
              <a href="https://www.instagram.com/humberto.fh/" target="_blanck">
                <span>Instagram</span> <AiOutlineInstagram />
              </a>

              <a href="https://github.com/humbertomonteiro" target="_blanck">
                <span>GitHub</span> <AiFillGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/"
                target="_blanck"
              >
                <span>Linkedin</span> <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="about">
          <h2>Sobre</h2>
          <p>
            Desenvolvedor Fullstack com experiência em criação de interfaces
            interativas e responsivas, buscando contribuir para projetos
            desafiadores.
          </p>
          <p>
            Habilidades em HTML5, CSS3, JavaScript, React.js, Node.js, Banco
            relacional e não relacional bem como conhecimentos em design
            responsivo e boas práticas de desenvolvimento. Excelente capacidade
            de trabalhar em equipe, resolver problemas e adaptar-se a novas
            tecnologias rapidamente.
          </p>
        </div>
      </div>

      <CarrosselProjects />

      <div className="article">
        <div className="courses">
          <h2>Cursos</h2>
          <div className="course">
            <h3>Curso Web Moderno Completo com JavaScript 2022 + Projetos</h3>
            <p>
              <strong>Instituição:</strong> Udemy / Cod3r
            </p>
            <p>
              <strong>Duração:</strong> 97,5 horas
            </p>
          </div>

          <div className="course">
            <h3>Desenvolvimento Web Completo - 20 cursos + 20 projetos</h3>
            <p>
              <strong>Instituição:</strong> Udemy
            </p>
            <p>
              <strong>Duração:</strong> 115,5 horas
            </p>
          </div>

          <div className="course">
            <h3>React Js do zero ao avançado na pratica</h3>
            <p>
              <strong>Instituição:</strong> Udemy
            </p>
            <p>
              <strong>Duração:</strong> 23,5 horas
            </p>
          </div>

          <div className="course">
            <h3>Projeto Completo NodeJS, React, React Native, TypeScript</h3>
            <p>
              <strong>Instituição:</strong> Udemy
            </p>
            <p>
              <strong>Duração:</strong> 23,5 horas
            </p>
          </div>
        </div>
      </div>
      <div className="article">
        <ul className="specialties">
          <h2>Especialidades</h2>
          <li>Sites</li>
          <li>Blogs</li>
          <li>Sistemas</li>
        </ul>
      </div>
      <CarrosselNotes />
    </motion.div>
  );
}
