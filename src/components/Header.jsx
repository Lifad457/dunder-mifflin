import { Link } from "react-router-dom";
import { Account, AccountButton, HeaderContainer, HeaderLogo, Nav } from "../styles/header.css";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo />
            <Nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="testimonials">Testimonials</Link></li>
                    <li><Link to="our-team">Our Team</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </Nav>
            <Account>
                <AccountButton className="cart"><RiShoppingCart2Line /></AccountButton>
                <AccountButton className="register">Sign in</AccountButton>
            </Account>
        </HeaderContainer>
    )
}   