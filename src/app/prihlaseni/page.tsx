"use client";
import LoginForm from "@/components/LoginForm";
import style from "./page.module.scss";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className={style.main}>
            <div className={"content"}>
                <h1>Přihlášení</h1>
                <LoginForm/>
                <div className={style.registerLink}>
                    <p className={"login-register-p"}>Nemáte účet? <Link href="/registrace">Zaregistrujte se</Link></p>
                </div>
            </div>
        </main>
    );
}