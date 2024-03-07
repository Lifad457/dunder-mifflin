import { Link } from "react-router-dom";
import { Account, AccountButton, HeaderContainer, HeaderLogo, Nav } from "../styles/header.css";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

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
                <AccountButton className="cart"><RiShoppingCart2Line /></AccountButton>
                <AccountButton className="register">Sign in</AccountButton>
            </Account>
        </HeaderContainer>
    )
}   