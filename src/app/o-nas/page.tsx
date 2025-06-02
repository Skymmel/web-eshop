"use client";
import style from "./page.module.scss";

export default function Home() {
    return (
        <main className={style.main}>
            <div className={"content"}>
                <h2>O nás</h2>
                <p>Jsme rájem pro milovníky starých časů a herní klasiky! Specializujeme se na prodej originálních retro
                    konzolí, herních titulů, sběratelských předmětů a vintage elektroniky, které vás vrátí zpět do zlaté
                    éry 80. a 90. let.</p>
            </div>
        </main>
    );
}
