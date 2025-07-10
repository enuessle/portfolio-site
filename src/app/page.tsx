import styles from "./page.module.css";
import Tabs from "@/components/tabs/tabs";

export default function Home() {
  return (
    <div className={styles["main"]}>
      <h1 className={styles["title"]}>Ethan Nuessle</h1>
      <p className={styles["aboutMe"]}>
        Hey! I'm Ethan, a B.S. Computer Science and Mathematics graduate from
        Rensselaer Polytecnic Institute! I have a strong academic background,
        graduating Magna Cum Laude with a 3.89 GPA, with an additional minor in
        Cognitive Science, and also have a large breadth of experience
        contributing to Open-Source software, working with teams at IMB to
        contribute to the Backends of Ceph and Tornjak, and with VizHub on
        Full-Stack contributions to VZCode. I'm passionate about Software
        Engineering and Artificial Intelligence, and the how these new
        technological advancements can change the current landscape!
      </p>
      <Tabs />
    </div>
  );
}
