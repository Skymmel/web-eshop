import styles from "./page.module.scss";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className={styles.page}>
        <div className={styles.mainImage}>
                <div className={styles.mainPage}>
                    <h1>Retro příslušenství</h1>
                    <p>Kupte si retro přislušenství a vraťte se zpět do minulosti</p>
                    <Carousel />
                </div>
        </div>
    </main>
  );
}