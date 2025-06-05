"use client";
import style from "./page.module.scss";
import Cart from "@/module/product/Cart";

export default function Home() {
    return (
        <main className={style.main}>
            <div className={"content"}>
                <h1>O nás</h1>
                <Cart/>
            </div>
        </main>
    );
}
