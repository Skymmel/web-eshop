"use client";
import { useState } from "react";
import SearchBar from "@/module/searchbar/SearchBar";
import { products as allProducts } from "@/lib/products";
import ProductComponent from "@/module/product/Product";
import style from "./page.module.scss";

export default function Home() {
    const [query, setQuery] = useState("");

    const filteredProduct = allProducts.filter((product) =>
        `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <main className={style.main}>
            <div className={"content"}>
                <div>
                    <h1>Nabídka</h1>
                    <SearchBar value={query} onChange={setQuery} />
                    <div className={style.products}>
                        {filteredProduct.map((product, index) => (
                            <ProductComponent key={index} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
