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
        width: 22rem;
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
    position: relative;

    font-size: var(--fs-regular);
    color: var(--color-white);
    border: none;
    border-radius: .2rem;
    background-color: var(--color-three);
    box-shadow: 0 10px 15px 0 rgba(255,83,48,.35);
    
    cursor: pointer;
`
export const CartLength = styled.div`
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--color-two);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-small);
    font-weight: var(--fw-medium);
`
export const ModalBox = styled.div`
    position: absolute;
    top: 5rem;
    left: -12rem;
    z-index: 100;
    
    display: block;
    min-width: 25rem;
    border-radius: .5rem;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    color: var(--color-black);
    
    h2 {
        padding: 1rem 2rem;
        border-bottom: 1px solid var(--color-five);
        text-align: left;
        color: var(--color-three);
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: 1rem;
    }

    li {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        font-size: var(--fs-regular);
        font-weight: var(--fw-medium);
        
        span {
            font-weight: var(--fw-bold);
        }
    }
`
export const CartButton = styled.button`
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