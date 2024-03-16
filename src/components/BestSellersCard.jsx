import { useOutletContext } from "react-router-dom";
import { CardButton, CardContent, CardImage, CardQuantity, CardWrapper } from "../styles/best-sellers.css";
import { useEffect, useState } from "react";

export default function BestSellersCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState("");
    const [cart, setCart] = useOutletContext();

    useEffect(() => {
        import(
            `../assets/images/${product.image}.jpg`
        ).then((image) => setImage(image.default));
    }, [cart]);

    function handleIncrement() {
        setQuantity(quantity + 1);
    }
    function handleDecrement() {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }
    
    function addToCart(product) {
        setCart(prevCart => {
                const productIndex = prevCart.findIndex(item => item.product.id === product.id);
                if (productIndex !== -1) {
                    prevCart[productIndex].quantity += quantity
                    return [...prevCart]
                }
                return [...prevCart, { product: product, quantity: quantity }]
            }
        )
        setQuantity(1)
    }

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
            <CardButton onClick={() => addToCart(product)}>ADD TO CART</CardButton>
        </CardWrapper>
    )
}