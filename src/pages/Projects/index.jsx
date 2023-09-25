import "./projects.css";

import { motion } from "framer-motion";
import { projects } from "../../dates/ArrayProjects";
import { Link } from "react-router-dom";

import CarrosselTow from "../../components/Carrossel-2";

export default function Projects() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="projects-container"
    >
      <h1>Projetos Pessoais</h1>

      {/* <CarrosselTow /> */}

      <div className="projects">
        {projects.map((e) => (
          <div key={e.id} className="iten-project">
            <img src={e.img} alt="img" />

            <div className="iten-project-info">
              <h2>{e.title}</h2>
              <div className="iten-project-btn">
                <a href={e.url} target="_blanck">
                  Ver projeto
                </a>
                <Link to={`/description/${e.id}`}>Descrição</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
