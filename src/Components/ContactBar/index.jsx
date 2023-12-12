// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.css";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/souvik-m-89ab7223b/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/souvikTito"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>

        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:johnsmith@gmail.com" className={styles.email}>
          souvik_tito@outlook.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
