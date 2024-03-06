function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto"></input>
      </div>
      <div>
        <input type="number" placeholder="Insira o valor do projeto"></input>
      </div>
      <div>
        <select name="category_id">
          <option>Seleciona a Categorio</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar Projeto"></input>
      </div>
    </form>
  );
}

export default ProjectForm;
<div></div>;
