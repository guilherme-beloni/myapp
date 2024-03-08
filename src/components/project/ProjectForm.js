import { useState, useEffect } from "react";
import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(
    projectData || { name: "", budget: "", category: "" }
  );

  useEffect(() => {
    fetch("http://localhost:5000/categories/")
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleCategory = (e) => {
    const categoryId = e.target.value;
    const categoryName = e.target.options[e.target.selectedIndex].text;
    setProject({
      ...project,
      category: { id: categoryId, name: categoryName },
    });
  };

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name}
      />

      <Input
        type="number"
        text="Valor do Projeto"
        name="budget"
        placeholder="Insira o valor do projeto"
        handleOnChange={handleChange}
        value={project.budget}
      />

      <Select
        name="category"
        text="Selecione a Categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category.id}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
