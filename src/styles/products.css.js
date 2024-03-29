import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    margin: 2rem auto;
`
export const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 100%;
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid var(--color-three);
    border-radius: 1rem;
    width: 20rem;
    box-shadow: 0 0 .5rem .2rem rgba(0, 0, 0, .2);
`
export const CardImage = styled.img`
    width: 100%;
    max-height: 10rem;
    border-bottom: 1px solid var(--color-five);
    padding: 0 2rem;
    object-fit: contain;
    background-color: var(--color-white);
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid var(--color-five);
    color: var(--color-four);
    font-size: var(--fs-small);

    h3 {
        font-size: var(--fs-small);
        font-weight: bold;
    }
    span {
        font-size: var(--fs-medium);
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
export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    min-width: 11rem;
    max-width: 11rem;
`
export const FilterButton = styled.button`
    display: inline-block;
    width: 5rem;
    padding: .5rem 1rem;
    font-size: var(--fs-small);
    font-weight: bold;
    color: var(--color-white);
    border: none;
    border-radius: .2rem;
    background-color: var(--color-three);
    box-shadow: 0 5px 15px 0 rgba(255,83,48,.35);
    cursor: pointer;

    &.active {
        background-color: var(--color-four);
        box-shadow: 0 5px 15px 0 rgba(255,83,48,.35);
    }
`
export const ButtonList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    border-radius: 1rem;
    margin: 1rem;
    h3 {
        font-size: var(--fs-small);
        font-weight: bold;
        color: var(--color-four);
    }
`