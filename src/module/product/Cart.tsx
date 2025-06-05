import { useEffect, useState } from "react";

interface CartItem {
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    quantity: number;
}

export default function Cart() {
    const [cart, setCart] = useState<CartItem[]>([]);

    // NAČTE DATA Z LOCALSTORAGE
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    // NAHRAJE DATA Z LOCALSTORAGE
    const updateCart = (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const increaseQuantity = (index: number) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        updateCart(newCart);
    };

    const decreaseQuantity = (index: number) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
        } else {
            newCart.splice(index, 1);
        }
        updateCart(newCart);
    };

    const removeItem = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        updateCart(newCart);
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return <p>Váš košík je prázdný.</p>;
    }

    return (
        <div>
            <h2>Váš košík</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index} style={{ marginBottom: "1em", borderBottom: "1px solid #ccc", paddingBottom: "1em" }}>
                        <img src={item.imgUrl} alt={item.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Cena: {item.price} Kč</p>
                        <div>
                            <button onClick={() => decreaseQuantity(index)}>-</button>
                            <span style={{ margin: "0 1em" }}>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(index)}>+</button>
                        </div>
                        <button onClick={() => removeItem(index)} style={{ marginTop: "0.5em", color: "red" }}>
                            Odebrat
                        </button>
                    </li>
                ))}
            </ul>
            <h3>Celkem: {total} Kč</h3>
            <button onClick={() => window.location.href = "/objednavka"}>Potvrdit objednávku</button>
        </div>
    );
}
