import styles from "./page.module.css";
import Tabs from "@/components/tabs/tabs";

export default function Home() {
  return (
    <div className={styles["main"]}>
      <h1 className={styles["title"]}>Ethan Nuessle</h1>
      <Tabs />
    </div>
  );
}
