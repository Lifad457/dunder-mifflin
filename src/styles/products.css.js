import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    margin: 2rem auto;
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    width: 20rem;
`
export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
`