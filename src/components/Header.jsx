import { Link } from "react-router-dom";
import { Account, AccountButton, CartButton, CartLength, HeaderContainer, HeaderLogo, ModalBox, Nav } from "../styles/header.css";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Header({ cart, setCart }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    function toggleModal() {
        setOpenModal(!openModal);
    }

    function checkOut() {
        setOpenModal(false);
        setCart([]);
    }

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
                <AccountButton onClick={toggleModal}>
                    <RiShoppingCart2Line />
                    {cart.length > 0 && <CartLength>{cart.length}</CartLength>}
                    { openModal &&
                        <ModalBox>
                            <h2>Your Cart</h2>
                            {
                                cart.length === 0 ? <ul><li>Your cart is empty</li></ul> :
                                <ul>
                                    {cart.map((item, index) => (
                                        <li key={index}>
                                            <p>{`${item.product.dimension} ${item.product.weight}g ${item.product.type} x ${item.quantity}`}</p>
                                            <span>{`${(parseFloat(item.product.price) * item.quantity).toFixed(2).toString()}€`}</span>
                                        </li>
                                    ))}
                                    <li><CartButton onClick={checkOut}>Buy Now !</CartButton></li>
                                </ul>
                            }
                        </ModalBox>
                    }
                </AccountButton>
                <AccountButton>Sign in</AccountButton>
            </Account>
        </HeaderContainer>
    )
}   