import styled from "styled-components";
import logo from "../assets/images/SvgLogo.jsx";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background-color: var(--color-one);
`
export const HeaderLogo = styled(logo)`
    width: 7rem;
    height: 7rem;
`
export const Nav = styled.div`
    display: flex;
    font-size: var(--fs-regular);
    font-weight: var(--fw-medium);
    cursor: pointer;

    ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
    }
    
    a {
        text-decoration: none;
        color: var(--color-font);
    }
`