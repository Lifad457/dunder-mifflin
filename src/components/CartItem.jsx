import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContent, CartDelete, CartImage, CartQuantity, Wrapper } from "../styles/cart-item.css";

export default function CartItem({ item, cart, setCart }) {
    const [image, setImage] = useState("");

    useEffect(() => {
        import(
            `../assets/images/${item.product.image}.jpg`
        ).then((image) => setImage(image.default));
    }, [cart]);

    function handleIncrement() {
        if (item.quantity < 99) {
            setCart(prevCart => {
                const productIndex = prevCart.findIndex(cartItem => cartItem.product.id === item.product.id);
                prevCart[productIndex].quantity += 1;
                return [...prevCart];
            });
        }
    }
    function handleDecrement() {
        if (item.quantity > 1) {
            setCart(prevCart => {
                const productIndex = prevCart.findIndex(cartItem => cartItem.product.id === item.product.id);
                prevCart[productIndex].quantity -= 1;
                return [...prevCart];
            });
        }
    }
    
    function removeItem() {
        setCart(cart.filter((cartItem) => cartItem !== item));
    }

    return (
        <Wrapper>
            <CartImage src={image} alt={item.product.type} />
            <CartContent>
                <p>{`${item.product.dimension} ${item.product.weight}g ${item.product.type}`}</p>
                <span>{`${(parseFloat(item.product.price) * item.quantity).toFixed(2)}€`}</span>
                <CartQuantity>
                    <div onClick={handleDecrement}>-</div>
                    <div>{item.quantity}</div>
                    <div onClick={handleIncrement}>+</div>
                </CartQuantity>
                <CartDelete onClick={removeItem}><FaRegTrashAlt /></CartDelete>
            </CartContent>
        </Wrapper>
    )
}