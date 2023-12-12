import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Contact() {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading_1}>
        <Heading index="04" heading="What's Next" />
      </div>
      <h1 className={styles.heading_2}>Get In Touch</h1>
      <p className={styles.desc}>
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>
      <div className="d-flex">
        <a className="me-1" href="tel:9932092539">
          <button className={styles.btn}>Call Me</button>
        </a>
        <a href="mailto:souvik_tito@outlook.com">
          <button className={styles.btn}>Say Hi</button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
