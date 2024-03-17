import { Link } from "react-router-dom";
import { Account, AccountButton, HeaderContainer, HeaderLogo, Nav } from "../styles/header.css";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { CartButton, CartButtonBuy, CartContainer, CartLength, ModalBox } from "../styles/cart-item.css";

export default function Header({ cart, setCart }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);
console.log(openModal);
    function toggleModal() {
        setOpenModal(!openModal);
    }

    function checkOut() {
        setOpenModal(false);
    }

    function handleClickOutside(event) {
        if (event.key === "Escape" || (event.target.className !== "cart" && !event.target.closest(".cart"))) {
            setOpenModal(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleClickOutside);
        };
    }, []);

    return (
        <HeaderContainer>
            {   
                openMenu ? <IoCloseSharp  className="burger" onClick={() => setOpenMenu(!openMenu)} /> 
                    : <GiHamburgerMenu className="burger" onClick={() => setOpenMenu(!openMenu)} />
            }
            <Link to=".">
                <HeaderLogo />
            </Link>
            <Nav $open={openMenu}>
                <ul>
                    <Link to="." onClick={() => setOpenMenu(false)}><li>Home</li></Link>
                    <Link to="products" onClick={() => setOpenMenu(false)}><li>Products</li></Link>
                    <Link to="testimonials" onClick={() => setOpenMenu(false)}><li>Testimonials</li></Link>
                    <Link to="our-team" onClick={() => setOpenMenu(false)}><li>Our Team</li></Link>
                    <Link to="contact" onClick={() => setOpenMenu(false)}><li>Contact</li></Link>
                </ul>
            </Nav>
            <Account>
                <CartContainer className="cart">
                    <CartButton onClick={toggleModal}><RiShoppingCart2Line /></CartButton>
                    {cart.length > 0 && <CartLength>{cart.length}</CartLength>}
                    { openModal &&
                        <ModalBox>
                            <h2>Your Cart</h2>
                            {
                                cart.length === 0 ? <ul><li>Your cart is empty</li></ul> :
                                <ul>
                                    {cart.map((item, index) => (
                                        <li key={index}>
                                            <CartItem item={item} cart={cart} setCart={setCart} />
                                        </li>
                                    ))}
                                    <li>
                                        <Link to="checkout">
                                            <CartButtonBuy onClick={checkOut}>Proceed to checkout</CartButtonBuy>
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </ModalBox>
                    }
                </CartContainer>
                <AccountButton>Sign in</AccountButton>
            </Account>
        </HeaderContainer>
    )
}   