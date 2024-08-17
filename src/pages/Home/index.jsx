import "./Home.css";

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillHtml5,
} from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaUserCircle, FaReact, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql, SiNextdotjs } from "react-icons/si";

import { Link } from "react-router-dom";

import CarrosselProjects from "../../components/carrossels/CarrosselProjects";
import CarrosselNotes from "../../components/carrossels/CarrosselNotes";
// import CarrosselTow from '../../components/Carrossel-2'

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="home-container">
      <div className="introduce">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="introduce-content"
        >
          <div className="introduce-text">
            <span>Olá, me chamo</span>
            <h1>Humberto Monteiro</h1>
            <h2>Sou Desenvolvedor Fullstack</h2>
            <p>
              Habilidades em HTML5, CSS3, JavaScript, React.js, node.js, bem
              como conhecimentos em design responsivo e boas práticas de
              desenvolvimento. Excelente capacidade de trabalhar em equipe,
              resolver problemas e adaptar-se a novas tecnologias rapidamente.
            </p>
          </div>
          <div className="home-btns">
            <a
              //   className="btn-1"
              href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/"
              target="_blanck"
            >
              <AiFillLinkedin />
              Linkedin
            </a>
            <a
              //   className="btn-1"
              href="https://github.com/humbertomonteiro"
              target="_blanck"
            >
              <AiOutlineGithub />
              Github
            </a>
            <a
              //   className="btn-1"
              href="https://www.instagram.com/humberto.fh/"
              target="_blanck"
            >
              <AiFillInstagram />
              Instagram
            </a>
            <Link
              to="/profile"
              // className="btn-2"
            >
              <FaUserCircle />
              Portfólio
            </Link>
          </div>
        </motion.div>

        <div className="introduce-img">
          <img src={require("../../assets/imgs/bg/img-home.png")} alt="" />
          <div className="iconsSkills">
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
      </div>

      <CarrosselProjects />

      <CarrosselNotes />
    </section>
  );
}
