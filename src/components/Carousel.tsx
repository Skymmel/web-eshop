"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { products } from "@/lib/products";
import styles from "./Carousel.module.scss";

export default function Carousel() {
    const [addedItems, setAddedItems] = useState<string[]>([]);

    // Načti stav z localStorage při načtení
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const names = cart.map((item: any) => item.name);
        setAddedItems(names);
    }, []);

    const handleAddToCart = (product: (typeof products)[0]) => {
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingItemIndex = existingCart.findIndex(
            (item: any) => item.name === product.name
        );

        if (existingItemIndex !== -1) {
            existingCart[existingItemIndex].quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        setAddedItems((prev) => [...prev, product.name]);
    };

    return (
        <div className={styles.carouselWrapper}>
            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                loop={true}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    700: { slidesPerView: 2 },
                    1000: { slidesPerView: 3 },
                }}
            >
                {products.map((product, index) => {
                    const isAdded = addedItems.includes(product.name);
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.productCard}>
                                <img src={product.imgUrl} alt={product.name} />
                                <div className={styles.productDetails}>
                                    <div className={styles.productParameters}>
                                        <b>{product.name}</b>
                                        <data>{product.price} Kč</data>
                                        <div>{product.description}</div>
                                    </div>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        disabled={isAdded}
                                    >
                                        {isAdded ? "Vloženo" : "Vložit do košíku"}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
