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
    }
        
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`