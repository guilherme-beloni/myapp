import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <Input
        type="number"
        text="Valor do Projeto"
        name="budget"
        placeholder="Insira o valor do projeto"
      />
      <Select name="categoty_id" text="Selecione a Categria" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
