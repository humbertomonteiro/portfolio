import "./description.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "../../dates/ArrayProjects";

import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { CiLink } from "react-icons/ci";

export default function Description() {
  const [project, setProject] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    function getProject() {
      const list = projects.filter((e) => e.id === Number(id));
      setProject(list);
    }

    getProject();
  }, [id]);

  return (
    <div className="project-description">
      {project.map((e) => (
        <div key={e.id} className="project-container">
          <h2>{e.title}</h2>

          <div className="project-content">
            <div className="project-text">
              <h3>Tecnologias:</h3>
              <p>{e.tecnologis}</p>
              <h4>Descrição:</h4>
              <p>{e.description}</p>
            </div>

            <div className="preject-img">
              <img src={e.img} alt={e.title} />

              <div className="project-btns">
                <Link to="/projects">
                  <IoIosArrowBack /> Voltar
                </Link>
                <a href={e.url} className="project-link" target="_black">
                  <CiLink />
                  ver projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
