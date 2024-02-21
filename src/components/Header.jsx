import { Account, AccountButton, HeaderContainer, HeaderLogo, Nav } from "../styles/header.css";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo />
            <Nav>
                <ul>
                    <li><a to="#">Home</a></li>
                    <li><a to="#">Products</a></li>
                    <li><a to="#">Testimonials</a></li>
                    <li><a to="#">Our Team</a></li>
                    <li><a to="#">Contact</a></li>
                </ul>
            </Nav>
            <Account>
                <AccountButton className="cart"><RiShoppingCart2Line /></AccountButton>
                <AccountButton className="register">Sign in</AccountButton>
            </Account>
        </HeaderContainer>
    )
}   