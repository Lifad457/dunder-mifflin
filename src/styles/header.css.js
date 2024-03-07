import styled from "styled-components";
import Logo from "../assets/images/SvgLogo.jsx";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    max-width: 90rem;
    margin: 0 auto;
    padding: 1rem 4rem;

    .burger {
        display: none;
        font-size: 2.5rem;
        color: var(--color-three);
        cursor: pointer;
        z-index: 99;

        @media (max-width: 980px) {
            display: block;
        }
    }
`
export const HeaderLogo = styled(Logo)`
    width: 7rem;
    height: 7rem;
    
    @media (max-width: 1200px) {
        display: none;
    }
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

    @media (max-width: 980px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 350px;
        background-color: rgba(255,255,255,.5);
        backdrop-filter: blur(10px);
        z-index: 98;
        transform: ${({ $open }) => $open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform .3s ease-in-out;
        justify-content: flex-end;

        ul {
            margin-top: 6rem;
            flex-direction: column;
            width: 100%;
        }

        li {
            margin: 0;
            padding: 1rem 4rem;
            font-size: var(--fs-medium);
            text-align: right;
            
            &:hover, &:focus {
                background-color: var(--color-three);
                color: var(--color-white);
            }
        }
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
