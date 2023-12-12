import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section className="pt-3" id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>Hello,</p>
          <p className={styles.desc}>
            I am a dynamic and innovative Software Developer and Consultant, specializing in crafting cutting-edge software solutions that drive business transformation.
            <br></br>    My expertise lies in seamlessly blending agile development methodologies with a mastery of full-stack technologies, delivering exceptional and scalable solutions across diverse business domains.
          </p>
          <p className={styles.desc}>
            Advanced Full-Stack Development:            <br></br>
            Profound expertise in Java, Python, and JavaScript, augmented by my adeptness in Node.js.
            <br></br>
            I specialize in architecting and developing intricate applications utilizing Spring Boot, MERN Stack, and Quarkus, ensuring a perfect blend of functionality and aesthetics.
          </p>
          <p className={styles.desc}>
            What I find most rewarding about my work is the opportunity to solve
            complex problems. I approach challenges with enthusiasm and a
            detail-oriented mindset, ensuring that the solutions I provide are
            not only effective but also efficient. The field of web development
            is constantly evolving, and I'm committed to staying up-to-date with
            the latest trends and best practices. Continuous learning is a
            fundamental part of my professional journey, and I relish the
            opportunity to expand my knowledge and skill set
          </p>
        </div>
        <div className={styles.right}>
          <img
            src="./images/souvik.jpeg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
