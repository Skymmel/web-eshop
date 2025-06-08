"use client";
import style from "./page.module.scss";
import Image from "next/image";

export default function Home() {
    let profileImg = 120;
    return (
        <main className={style.main}>
            <div className={"content"}>
                <h1>O nás</h1>
                <p>Jsme rájem pro milovníky starých časů a herní klasiky! Specializujeme se na prodej originálních retro
                    konzolí, herních titulů, sběratelských předmětů a vintage elektroniky, které vás vrátí zpět do zlaté
                    éry 80. a 90. let.</p>
                <div className={style.personalCards}>
                    <div className={style.personalCard}>
                        <Image src={"/martin.jpg"} alt={""} width={profileImg} height={profileImg}/>
                        <h3>Martin Konečný</h3>
                        <i>Zakladatel & sběratel</i>
                        <p>
                            Retro je jeho životní styl. Jeho sbírka konzolí začíná u Atari 2600 a končí u Sega
                            Dreamcast.
                            Pečlivě vybírá každý kousek, který se objeví na webu.
                        </p>
                    </div>
                    <div className={style.personalCard}>
                        <Image src={"/amelie.png"} alt={""} width={profileImg} height={profileImg}/>
                        <h3>Amelie Nováková</h3>
                        <i>Design & zákaznický servis</i>
                        <p>
                            Specialistka na nostalgii a zážitky. Stará se o vizuál obchodu, komunikaci se zákazníky a
                            miluje kazetové přehrávače skoro víc než čokoládu.
                        </p>
                    </div>
                </div>
                <img className={style.img} src="/kazety.png"/>
                <h2>
                    Založeno z lásky k minulosti
                </h2>
                <p>
                    RetroRáj vznikl v roce 2023 jako malý projekt dvou kamarádů posedlých herní historií a starou
                    elektronikou. Z původního sběratelského blogu se rychle stal e-shop, kde si každý fanoušek může
                    najít kousek své minulosti. Naším cílem je udržet vzpomínky živé – a zábavné.
                </p>
            </div>
        </main>
    );
}
