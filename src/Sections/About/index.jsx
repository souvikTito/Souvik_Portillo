import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section className="pt-3" id="about">
      <Heading index="01" heading="More on me!" />
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
            Cloud Computing Virtuoso:            <br></br>
            Extensive prowess in Amazon Web Services (AWS), deploying cloud-native solutions that are both robust and agile, optimizing business operations in the cloud era.
          </p>
          <p className={styles.desc}>
            Data Management Maestro:            <br></br>
            Adept in database intricacies with MySQL and Datastax, I excel in sophisticated data modelling and strategic database design, ensuring data integrity and efficiency.
          </p>
          {/* <p className={styles.desc}>
            API Architect:           <br></br>
            A connoisseur of RESTful WebServices and API development, I am well-versed in creating seamless integrations and automations using Postman, Swagger, and Confluent Kafka.
          </p>
          <p className={styles.desc}>
            Microservices Strategist:          <br></br>
            Skilled in the art of microservices architecture, I leverage Apache Kafka for efficient message streaming, enhancing system responsiveness and scalability.
          </p>
          <p className={styles.desc}>
            Front-End Aficionado:           <br></br>
            Adept in HTML and CSS, I craft intuitive and visually appealing interfaces, ensuring an engaging user experience.
          </p> */}
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
