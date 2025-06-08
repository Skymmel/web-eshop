"use client";
import style from "./page.module.scss";

export default function Home() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Formulář byl úspěšně odeslán!");
        event.currentTarget.reset();
    };

    return (
        <main className={style.main}>
            <div className={"content"}>
                <div>
                    <div>
                        <h1>Kontakt</h1>
                    </div>
                    <div className={style.contacts}>
                        <div>
                            <h3>E-mail</h3>
                            <a href={"mailto:wilhelmskyba@tutanota.de"}>wilhelmskyba@tutanota.de</a>
                        </div>
                        <div>
                            <h3>Telefon</h3>
                            <a href={"tel:+4915228551592"}>+49 152 28551592</a>
                        </div>
                        <div>
                            <h3>Datové schránka</h3>
                            <code>4jviqmp</code>
                        </div>
                        <div>
                            <h3>Adresa</h3>
                            <address>
                                Elišky Přemyslovny 1269, <br />
                                15600 Praha-Zbraslav, Česko
                            </address>
                        </div>
                    </div>
                    <img
                        src={
                            "https://media.istockphoto.com/id/503180457/photo/hand-inserting-old-floppy-disk-drive-into-vintage-eigthies-computer.jpg?s=612x612&w=0&k=20&c=Xno1xZ86OPZwag0AsYOUgk8M_aWAdrOAfM1WrfqX6qo="
                        }
                        width={"100%"}
                        alt={""}
                    />

                    <form
                        action=""
                        method="POST"
                        className={style.formular}
                        onSubmit={handleSubmit} // ← přidáno
                    >
                        <div className={style.nameGroup}>
                            <label htmlFor="name">
                                Jméno
                                <input
                                    placeholder={"Jan Novák"}
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </label>
                            <label htmlFor="email">
                                E-mail
                                <input
                                    placeholder={"jan.novak@seznam.cz"}
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </label>
                        </div>
                        <label htmlFor="subject">
                            Předmět
                            <input placeholder={"Předmět"} type="text" id="subject" name="subject" />
                        </label>
                        <label htmlFor="message">
                            Zpráva
                            <textarea
                                placeholder={"Zpráva"}
                                id="message"
                                name="message"
                                required
                            ></textarea>
                        </label>
                        <button type="submit">Odeslat</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
