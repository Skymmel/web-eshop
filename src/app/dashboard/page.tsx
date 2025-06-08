"use client";
import { getLoggedInUser } from "@/helpers/userStorage";
import style from "./page.module.scss";
import Link from "next/link";

export default function Dashboard() {
    const user = getLoggedInUser();

    if (!user) {
        return (
            <div className={style.container}>
                <h1>Přístup odepřen</h1>
                <p>Pro zobrazení této stránky se musíte přihlásit.</p>
                <Link href="/prihlaseni" className={style.link}>
                    Přihlásit se
                </Link>
            </div>
        );
    }

    return (
        <main className={style.main}>
            <div className={"content"}>
                <h1>Účet</h1>
                <h2>
                    Vítejte zpět, {user.name}!
                </h2>
                <div className={style.userInfo}>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Adresa:</strong> {user.address}</p>
                </div>
                <div className={style.actions}>
                    <Link href="/nabidka" className={style.button}>
                        Prohlédnout nabídku
                    </Link>
                    <Link href="/kosik" className={style.button}>
                        Zobrazit košík
                    </Link>
                </div>
            </div>
        </main>
    );
}