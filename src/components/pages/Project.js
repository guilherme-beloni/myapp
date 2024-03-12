import styles from "./Project.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../layout/Container";
import Message from "../layout/Message";
import ProjectForm from "../project/ProjectForm";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState({}); // Declare a variável project
  const [showProjectForm, setShowProjectForm] = useState(false); // Declare a variável project
  const [message, setMessage] = useState();
  const [type, setType] = useState(); // Declare a variável

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  function editPost(project) {
    // budget validation
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto Atualizado!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria: </span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Custo: </span>
                    R${project.budget}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        "Carregando..."
      )}
    </>
  );
}

export default Project;
