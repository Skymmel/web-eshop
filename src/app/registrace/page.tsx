"use client";
import RegisterForm from "@/components/RegisterForm";
import style from "./page.module.scss";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className={style.container}>
            <div className={style.registerBox}>
                <h1>Vytvoření účtu</h1>
                <RegisterForm />
                <div className={style.loginLink}>
                    <p>Již máte účet? <Link href="/prihlaseni">Přihlaste se</Link></p>
                </div>
            </div>
        </main>
    );
}