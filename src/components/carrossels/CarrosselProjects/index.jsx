import "./carrossel.css";

import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { projects } from "../../../dates/ArrayProjects";

import { IoIosArrowForward } from "react-icons/io";

export default function CarrosselProjects() {
  const carrossel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
  }, []);

  return (
    <section className="carrossel-container">
      <div className="header-carrossel">
        <h1>Projetos Pessoais</h1>
        <Link to="/projects">
          <span>Ver todos</span> <IoIosArrowForward />
        </Link>
      </div>
      <div className="div-carrossel">
        <motion.div
          ref={carrossel}
          className="carrossel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {projects.map((e) => (
              <motion.div className="item" key={e.id}>
                <div className="item-img">
                  <img src={e.img} alt="" />
                </div>
                <a href={e.url} target="_blanck">
                  <abbr title={e.description}>
                    <h2>{e.title}</h2>
                    <p>{e.tecnologis}</p>
                  </abbr>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
