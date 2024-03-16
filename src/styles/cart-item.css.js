import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    position: relative;
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
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid var(--color-three);
    border-radius: 1rem;
    margin: 1rem 0;
    max-width: 30rem;
    min-width: 30rem;
    margin: 0 auto;
    font-size: var(--fs-regular);
    font-weight: var(--fw-medium);
    background-color: var(--color-white);
    box-shadow: 0 0 1rem rgba(0,0,0,.2);
    gap: 1rem;
`
export const CartImage = styled.img`
    max-width: 8rem;
    max-height: auto;
    object-fit: cover;
`
export const CartContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    background-color: var(--color-one);
    position: relative;
    overflow: hidden;
    padding: 1rem;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
`
export const CartQuantity = styled.div`
    display: flex;
    justify-content: center;
    border: none;
    font-size: var(--fs-small);
    font-weight: bold;
    margin: 1rem;

    div {
        cursor: pointer;
        background-color: var(--color-five);
        padding: .4rem .7rem;
        margin: .04rem;
    }
    div:nth-child(1) {
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
    }
    div:nth-child(3) {
        border-top-right-radius: .5rem;
        border-bottom-right-radius: .5rem;
    }
`
export const CartDelete = styled.div`
    color: var(--color-three);
    padding: .5rem;
    border-radius: .5rem;
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
    right: -10rem;
    min-width: 20rem;
    z-index: 100;
    
    display: block;
    border-radius: .5rem;
    background-color: rgba(255, 200, 200, 0.2);
    backdrop-filter: blur(10px);
    color: var(--color-black);

    cursor: default;
    
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
        padding: .4rem 2rem;
        font-size: var(--fs-regular);
        font-weight: var(--fw-medium);
        
        span {
            font-weight: var(--fw-bold);
        }
    }
`
export const CartButtonBuy = styled.div`
    display: inline-block;
    padding: .7rem 1.5rem;
    margin: .8rem 0;

    font-size: var(--fs-regular);
    color: var(--color-white);
    border: none;
    border-radius: .2rem;
    background-color: var(--color-three);
    box-shadow: 0 10px 15px 0 rgba(255,83,48,.35);
    
    cursor: pointer;
`