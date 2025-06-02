import style from "./page.module.scss";

export default function Home() {
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
                            Elišky Přemyslovny 1269, <br/>
                            15600 Praha-Zbraslav, Česko
                        </address>
                    </div>
                </div>
                <img src={"https://media.istockphoto.com/id/503180457/photo/hand-inserting-old-floppy-disk-drive-into-vintage-eigthies-computer.jpg?s=612x612&w=0&k=20&c=Xno1xZ86OPZwag0AsYOUgk8M_aWAdrOAfM1WrfqX6qo="} width={"100%"}  alt={""}/>
            </div>
        </div>
    </main>
  );
}