import "./description.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "../../dates/ArrayProjects";

import { Link } from "react-router-dom";

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
    <div className="project">
      {project.map((e) => (
        <div key={e.id}>
          <h2>{e.title}</h2>
          <div className="project-content">
            <img src={e.img} alt="" />
            <div className="project-text">
              <h3>Tecnologias:</h3>
              <p>HTML, CSS e JavaScript</p>
              <h4>Descrição:</h4>
              <p>{e.description}</p>
            </div>
            <div className="project-btns">
              <Link to="/projects">Voltar</Link>
              <a href={e.url} className="project-link" target="_black">
                ver projeto
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
