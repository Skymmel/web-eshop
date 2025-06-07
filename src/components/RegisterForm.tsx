"use client";
import { useState } from "react";
import { saveUser } from "@/helpers/userStorage";
import { useRouter } from "next/navigation";
import "./form.scss";

export default function RegisterForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",
    });
    const [phonePrefix, setPhonePrefix] = useState("+420"); // Stav pro předvolbu

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Validace
        if (!form.email || !form.password || !form.name || !form.address || !form.phone) {
            setError("Vyplňte všechna pole");
            setIsSubmitting(false);
            return;
        }

        // Validace emailu
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError("Zadejte platný email");
            setIsSubmitting(false);
            return;
        }

        // Validace telefonu - musí být přesně 9 číslic
        const phoneDigits = form.phone.replace(/\D/g, '');
        if (phoneDigits.length !== 9) {
            setError("Telefonní číslo musí mít 9 číslic");
            setIsSubmitting(false);
            return;
        }

        try {
            // Uložíme telefon včetně předvolby
            const userWithPhone = {
                ...form,
                phone: phonePrefix + phoneDigits
            };

            saveUser(userWithPhone);
            alert("Registrace úspěšná! Nyní se můžete přihlásit.");
            router.push("/prihlaseni");
        } catch (err) {
            setError("Nastala chyba při registraci. Zkuste to prosím později.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Povolíme pouze číslice a omezení na 9 znaků
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 9) {
            setForm({...form, phone: value});
        }
    };

    return (
        <form className="form-retro" onSubmit={handleSubmit}>
            <h2>Registrace</h2>

            {error && <div className="form-error">{error}</div>}

            <input
                className="input-retro"
                required
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
            />

            <input
                className="input-retro"
                required
                placeholder="Heslo"
                type="password"
                value={form.password}
                onChange={e => setForm({...form, password: e.target.value})}
            />

            <input
                className="input-retro"
                required
                placeholder="Jméno a příjmení"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
            />

            <input
                className="input-retro"
                required
                placeholder="Doručovací adresa"
                value={form.address}
                onChange={e => setForm({...form, address: e.target.value})}
            />

            <div className="phone-group">
                <select
                    className="phone-prefix"
                    value={phonePrefix}
                    onChange={e => setPhonePrefix(e.target.value)}
                >
                    <option value="+420">+420</option>
                    <option value="+421">+421</option>
                    {/* Přidejte další předvolby podle potřeby */}
                </select>
                <input
                    className="phone-number"
                    type="tel"
                    placeholder="Telefonní číslo"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    required
                />
            </div>

            <button
                className="btn-retro"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Zpracovávám..." : "Vytvořit účet"}
            </button>
        </form>
    );
}