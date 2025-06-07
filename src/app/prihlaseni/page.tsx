"use client";
import LoginForm from "@/components/LoginForm";
import style from "./page.module.scss";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className={style.container}>
            <div className={style.loginBox}>
                <h1>Přihlášení</h1>
                <LoginForm />
                <div className={style.registerLink}>
                    <p>Nemáte účet? <Link href="/registrace">Zaregistrujte se</Link></p>
                </div>
            </div>
        </main>
    );
}