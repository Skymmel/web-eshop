"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getLoggedInUser, logoutUser } from "@/helpers/userStorage";
import { useRouter } from "next/navigation";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const router = useRouter();
    const user = getLoggedInUser();

    const handleLogout = () => {
        logoutUser();
        router.push("/");
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <header className="pageHeader">
            <div className="content">
                <div className="mainHeader">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Retro" width={36} height={36}/>
                    </Link>
                    <button onClick={toggleNav}>
                        <Image src="/nav.svg" alt="Menu" width={20} height={20} />
                    </button>
                </div>
                <nav id="nav" className={navOpen ? "open" : ""}>
                    <ul>
                        <li>
                            <Link href="/" onClick={closeNav}>Úvod</Link>
                        </li>
                        <li>
                            <Link href="/nabidka/" onClick={closeNav}>Nabídka</Link>
                        </li>
                        <li>
                            <Link href="/o-nas/" onClick={closeNav}>O nás</Link>
                        </li>
                        <li>
                            <Link href="/kontakt/" onClick={closeNav}>Kontakt</Link>
                        </li>
                        {user ? (
                            <>
                                <li>
                                    <Link href="/dashboard">Můj účet</Link>
                                </li>
                                <li>
                                    <a onClick={handleLogout} className="logout-button">
                                        Odhlásit se
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/prihlaseni">Přihlášení</Link>

                                </li>
                                <li>
                                    <Link href="/registrace">Registrace</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link href="/kosik/" onClick={closeNav}>Košík</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
