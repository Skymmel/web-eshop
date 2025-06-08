"use client";
import { useState } from "react";
import { findUser, saveLoggedInUser } from "@/helpers/userStorage";
import { useRouter } from "next/navigation";
import "./form.scss";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const user = findUser(email, password);
        if (user) {
            saveLoggedInUser(user);
            router.push("/dashboard");
        } else {
            alert("Špatné přihlašovací údaje.");
        }
    };

    return (
        <form className="form-retro" onSubmit={handleLogin}>
            <label>
                E-mail
                <input
                    className="input-retro"
                    required
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label>
                Heslo
                <input
                    className="input-retro"
                    required
                    placeholder="Heslo"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </label>

            <button className="btn-retro" type="submit">Přihlásit</button>
        </form>
    );
}
