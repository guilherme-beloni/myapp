import styles from "./Home.module.css";
import savings from "../../img/imgHome.png";
import LinkButton from "../layout/LinkButton";
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Projetech</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Projetech"></img>
    </section>
  );
}

export default Home;
