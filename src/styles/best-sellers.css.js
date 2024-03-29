import styled from "styled-components";

export const BestSellers = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 30rem;
    padding: 2rem 4rem;
    border-bottom: 1px solid var(--color-grey);
    background-color: var(--color-white);
    border-radius: .2rem;
    box-shadow: 0 10px 20px 5px rgba(0,0,0,.1);

    h1 {
        font-size: var(--fs-medium);
        font-weight: var(--fw-bold);
        margin: 0 4rem;
    }
        
    @media (max-width: 980px) {
        margin: 0 auto;
        text-align: center;
    }
`
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 3rem;
    padding: 2rem 0;
    margin: 0 4rem;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-five);
    border-radius: 0.3rem;
`
export const CardImage = styled.img`
    max-width: 15rem;
    max-height: 10rem;
    border-bottom: 1px solid var(--color-five);
    padding: 0 2rem;
    object-fit: contain;
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid var(--color-five);
    color: var(--color-four);
    font-size: var(--fs-small);

    h3 {
        font-size: var(--fs-small);
        font-weight: bold;
    }

    span {
        font-size: var(--fs-regular);
        font-weight: bold;
        color: var(--color-black);
    }
`
export const CardQuantity = styled.div`
    display: flex;
    justify-content: center;
    border: none;
    font-size: var(--fs-small);
    font-weight: bold;
    margin: 1rem;

    div {
        cursor: pointer;
        background-color: var(--color-five);
        padding: .6rem 1.2rem;
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
export const CardButton = styled.button`
    display: inline-block;
    padding: .5rem 1.5rem;
    margin: 0 1rem 1rem;

    font-size: var(--fs-small);
    font-weight: var(--fw-bold);
    color: var(--color-white);
    border: none;
    border-radius: .2rem;
    background-color: var(--color-three);
    box-shadow: 0 5px 15px 0 rgba(255,83,48,.35);

    cursor: pointer;
`