import styles from "./page.module.css";
import Tabs from "@/components/tabs/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles["main"]}>
      <h1 className={styles["title"]}>Ethan Nuessle</h1>
      <p className={styles["aboutMe"]}>
        Hi! I'm Ethan, a{" "}
        <span className={styles["altColour"]}>
          B.S. Computer Science and Mathematics
        </span>{" "}
        graduate from Rensselaer Polytecnic Institute! I have a strong academic
        background, graduating Magna Cum Laude with a 3.89 GPA and a{" "}
        <span className={styles["altColour"]}>minor in Cognitive Science</span>,
        and also have a large breadth of experience contributing to Open-Source
        software, working with teams at IMB to contribute to the Backends
        of&nbsp;
        <a href="https://ceph.io/en/" className={styles["aboutLink"]}>
          Ceph
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/spiffe/tornjak"
          className={styles["aboutLink"]}
        >
          Tornjak
        </a>
        , and with VizHub on Full-Stack contributions to{" "}
        <a
          href="https://github.com/vizhub-core/vzcode"
          className={styles["aboutLink"]}
        >
          VZCode
        </a>
        . I'm passionate about{" "}
        <span className={styles["altColour"]}>
          Software Engineering and Artificial Intelligence
        </span>
        , and the how these new technological advancements can change the
        current tech landscape!
      </p>
      <div className={styles["linkRow"]}>
        <Link
          href="https://www.linkedin.com/in/ethan-nuessle/"
          className={styles["link"]}
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/enuessle" className={styles["link"]}>
          GitHub
        </Link>
        <Link href="mailto:contact@enuessle.dev" className={styles["link"]}>
          E-Mail
        </Link>
      </div>
      <Tabs />
    </div>
  );
}
