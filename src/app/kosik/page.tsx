"use client";
import { useState, useEffect } from "react";
import { getLoggedInUser } from "@/helpers/userStorage";
import style from "./page.module.scss";

export default function CartPage() {
    const [cart, setCart] = useState<any[]>([]);
    const [user, setUser] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phonePrefix: "+420", // Přednastavená předvolba
        phoneNumber: "", // Část pro telefonní číslo
        payment: "card",
    });
    const [error, setError] = useState<string | null>(null); // Pro souhrnnou chybovou hlášku

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);

        const loggedInUser = getLoggedInUser();
        setUser(loggedInUser);

        if (loggedInUser) {
            const phone = loggedInUser.phone || "";
            const prefix = phone.substring(0, 4);
            const number = phone.substring(4);

            setFormData(prev => ({
                ...prev,
                name: loggedInUser.name,
                email: loggedInUser.email,
                address: loggedInUser.address,
                phonePrefix: prefix,
                phoneNumber: number,
            }));
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Omezení telefonního čísla na číslice a max. 9 znaků
        if (name === "phoneNumber") {
            const digitsOnly = value.replace(/\D/g, '');
            if (digitsOnly.length <= 9) {
                setFormData(prev => ({ ...prev, [name]: digitsOnly }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Resetujeme chyby

        // Validace formuláře
        const errors = [];

        if (!formData.name.trim()) errors.push("Jméno");
        if (!formData.email.trim()) errors.push("Email");
        if (!formData.address.trim()) errors.push("Adresa");
        if (!formData.phoneNumber || formData.phoneNumber.length !== 9) errors.push("Telefon");

        // Validace emailu
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            errors.push("Neplatný email");
        }

        if (errors.length > 0) {
            setError(`Chyba v polích: ${errors.join(", ")}`);
            return;
        }

        // Odeslání objednávky
        alert("Objednávka byla úspěšně odeslána!");
    };

    const removeItem = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const updateQuantity = (index: number, quantity: number) => {
        if (quantity < 1) return;

        const newCart = [...cart];
        newCart[index].quantity = quantity;
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <main className={style.container}>
            <h1>Váš košík</h1>

            {cart.length === 0 ? (
                <p className={style.empty}>Košík je prázdný</p>
            ) : (
                <div className={style.cartItems}>
                    {cart.map((item, index) => (
                        <div key={index} className={style.cartItem}>
                            <img src={item.imgUrl} alt={item.name} className={style.itemImage} />
                            <div className={style.itemDetails}>
                                <h3>{item.name}</h3>
                                <p>{item.price} Kč/ks</p>
                                <div className={style.quantityControl}>
                                    <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                            <div className={style.itemTotal}>
                                <p>{item.price * item.quantity} Kč</p>
                                <button onClick={() => removeItem(index)} className={style.removeButton}>
                                    Odstranit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className={style.summary}>
                <h2>Celkem: {totalPrice} Kč</h2>
            </div>

            {cart.length > 0 && (
                <form onSubmit={handleSubmit} className={style.orderForm}>
                    <h2>Dodací údaje</h2>

                    {/* Souhrnná chybová hláška */}
                    {error && <div className={style.error}>{error}</div>}

                    <div className={style.formGroup}>
                        <label>Jméno a příjmení</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className={style.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className={style.formGroup}>
                        <label>Adresa</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className={style.formGroup}>
                        <label>Telefon</label>
                        <div className={style.phoneGroup}>
                            <select
                                name="phonePrefix"
                                value={formData.phonePrefix}
                                onChange={handleInputChange}
                                className={style.phonePrefix}
                            >
                                <option value="+420">+420</option>
                                {/* Můžete přidat další předvolby */}
                            </select>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="123456789"
                                maxLength={9}
                                className={style.phoneNumber}
                                required
                            />
                        </div>
                    </div>

                    <div className={style.formGroup}>
                        <label>Způsob platby</label>
                        <select
                            name="payment"
                            value={formData.payment}
                            onChange={handleInputChange}
                        >
                            <option value="card">Kreditní karta</option>
                            <option value="cash">Dobírka</option>
                            <option value="bank">Bankovní převod</option>
                        </select>
                    </div>

                    <button type="submit" className={style.submitButton}>
                        Potvrdit objednávku
                    </button>
                </form>
            )}
        </main>
    );
}