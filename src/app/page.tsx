import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
        <div className={styles.mainImage}>
            <div className={"content"}>
                <div className={styles.mainPage}>
                    <h1>Retro příslušenství</h1>
                    <p>Kupte si retro přislušenství a vraťte se zpět do minulosti</p>
                    <a href={""} className={"btn"}>Prozkoumat nabídku</a>
                </div>
            </div>
        </div>
    </main>
  );
}