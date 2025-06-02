import "./product.css";
import type { Products } from "@/lib/products"; // Ujisti se, že typ je správně pojmenovaný

export default function Product({ name, description, price, imgUrl }: Products) {
    return (
        <div className="productCard">
            <img src={imgUrl}  />
            <div className={"productDetails"}>
                <b>{name}</b>
                <small>{description}</small>
                <data value={price}>{price} Kč</data>
            </div>
        </div>
    );
}
