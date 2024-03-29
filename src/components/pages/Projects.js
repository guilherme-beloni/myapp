import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
function Projects() {
  //criando state para salvar projetos
  const [projects, setProjects] = useState([]);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function removeProject(id) {
    // Exibe um alerta de confirmação antes de excluir o projeto
    const confirmDelete = window.confirm("Deseja excluir este projeto?");

    if (confirmDelete) {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then(() => {
          setProjects(projects.filter((project) => project.id !== id));
          setProjectMessage("Projeto removido com sucesso!");
        })
        .catch((err) => console.log(err));
    } else {
      // O usuário cancelou a exclusão
      console.log("Exclusão cancelada pelo usuário.");
    }
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container custonClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
      </Container>
    </div>
  );
}

export default Projects;
