import styles from "./styles.module.css";

function Home() {
  return (
    <section
      className={`mt-5 pt-5 mt-md-0 pt-md-0${styles.home_section}`}
      id="home"
    >
      <p className={styles.greet}>Hi, my name is</p>
      <h1 className={styles.heading_1}>Souvik Mal.</h1>
      <h1 className={styles.heading_2}>Software Developer & Consultant.</h1>
      <p className={styles.desc}>
        I am a seasoned software developer and consultant with a diverse skill set and a strong passion for creating efficient and scalable solutions.
        My expertise spans various aspects of software development, from core Java and web technologies to modern frameworks, microservices, databases, and cloud platforms.
        With a proven track record in designing and implementing complex systems, I bring a wealth of knowledge and experience to any project.

      </p>
      <a href="#work">
        <button className={styles.btn}>Review my efforts!</button>
      </a>
    </section>
  );
}

export default Home;
