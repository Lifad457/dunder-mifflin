import styled from "styled-components";
import logo from "../assets/images/SvgLogo.jsx";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;

    @media (max-width: 768px) {
        display: none;
    }
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
        gap: 2rem;
    }
    
    a {
        text-decoration: none;
        color: var(--color-font);
    }
`
export const Account = styled.div`
    display: flex;
    gap: 2rem;

`
export const AccountButton = styled.button`
    display: inline-block;
    padding: .5rem 1.5rem;

    font-size: var(--fs-regular);
    color: var(--color-white);
    border: none;
    border-radius: .2rem;
    background-color: var(--color-three);
    box-shadow: 0 10px 15px 0 rgba(255,83,48,.35);
    
    cursor: pointer;
`
