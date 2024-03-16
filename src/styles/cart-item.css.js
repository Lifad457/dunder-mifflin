import styled from "styled-components";

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
    width: 8rem;
    height: 8rem;
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