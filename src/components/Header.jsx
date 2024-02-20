import { HeaderContainer, HeaderLogo, Nav } from "../styles/header.css";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo />
            <Nav>
                <ul>
                    <li><a to="#">Home</a></li>
                    <li><a to="#">About</a></li>
                    <li><a to="#">Projects</a></li>
                    <li><a to="#">Contact</a></li>
                </ul>
            </Nav>
        </HeaderContainer>
    )
}   