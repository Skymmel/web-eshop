import { useState, useEffect } from "react";
import "./product.scss";
import type { Products } from "@/lib/products";

export default function Product({ name, description, price, imgUrl }: Products) {
    const [added, setAdded] = useState(false);

    // Při načtení komponenty zkontrolujeme, jestli už je produkt v košíku
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const exists = cart.some((item: any) => item.name === name);
        if (exists) setAdded(true);
    }, [name]);

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const newItem = { name, description, price, imgUrl, quantity: 1 };

        const existingItemIndex = existingCart.findIndex((item: any) => item.name === name);

        if (existingItemIndex !== -1) {
            existingCart[existingItemIndex].quantity += 1;
        } else {
            existingCart.push(newItem);
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        setAdded(true); // Deaktivuj tlačítko
    };

    return (
        <div className="productCard">
            <img src={imgUrl} alt={name} />
            <div className="productDetails">
                <div className={"productParameters"}>
                    <b>{name}</b> <data value={price}>{price} Kč</data>
                    <div>{description}</div>
                </div>
                <button onClick={handleAddToCart} disabled={added}>
                    {added ? "Vloženo" : "Přidat do košíku"}
                </button>
            </div>
        </div>
    );
}
