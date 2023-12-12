import Heading from "./../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function Work() {
  const [myRepo, setMyRepo] = useState([]);

  const getMyRepo = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/sujitb368/repos`
      );

      const data = await response?.json();

      if (data) {
        setMyRepo(data);
      }

      console.log(data);
    } catch (error) {
      console.log(`Error:`, error);
    }
  };

  useEffect(() => {
    getMyRepo();
  }, []);
  return (
    <section id="work">
      <Heading index="03" heading="Some Things I’ve Built" />
      <div className={`row m-0 justify-content-center`}>
        {myRepo.map((repo, index) => (
          <div
            key={repo.id}
            className={`${styles.project
              } col-md-4 col-lg-3 border rounded d-flex flex-column justify-content-center align-items-center m-0 ${(index + 1) % 3 !== 0 ? "me-lg-3" : ""
              } mb-2 p-3 `}
          >
            <div className={`col-12 ${styles.right}`}>
              <a href={repo.clone_url} className={`fw-bold m-auto `}>
                {repo.name}
              </a>

              <p className={`mt-2 ${styles.desc}`}>
                {repo.description ?? "No description"}
              </p>

              <div>
                <a
                  href={repo.clone_url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.link} pointer`}
                >
                  <GitHubIcon />
                </a>
                {/* <a href="/" className={styles.link}>
                  <OpenInNewIcon />
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
