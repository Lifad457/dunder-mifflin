import { CardButton, CardContent, CardImage, CardQuantity, CardWrapper } from "../styles/best-sellers.css";
import { useEffect, useState } from "react";

export default function BestSellersCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState("");

    useEffect(() => {
        import(
            `../assets/images/${product.image}`
        ).then((image) => setImage(image.default));
    }, []);

    function handleIncrement() {
        setQuantity(quantity + 1);
    }
    function handleDecrement() {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }
    console.log(product)
    return (
        <CardWrapper>
            <CardImage src={image} />
            <CardContent>
                <h3>{`${product.dimension} ${product.weight}g ${product.type}`}</h3>
                <p>{`${product.quantity} sheets`}</p>
                <p><span>{`${product.price} €`}</span></p>
            </CardContent>
            <CardQuantity>
                <div onClick={handleDecrement}>-</div>
                <div>{quantity}</div>
                <div onClick={handleIncrement}>+</div>
            </CardQuantity>
            <CardButton>ADD TO CART</CardButton>
        </CardWrapper>
    )
}