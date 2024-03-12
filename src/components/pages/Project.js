import styles from "./Project.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({}); // Declare a variável project

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

  return <p>{project.name}</p>;
}

export default Project;
