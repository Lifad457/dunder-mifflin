import styled from "styled-components";

export const ChooseUsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
    margin: 5rem 0;

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`
export const ChooseUsLeftCol = styled.div`
    padding: 2rem;

    h3 {
        color: var(--color-three);
        font-size: var(--fs-regular);
        margin-bottom: 1rem;
    }
    h1 {
        font-size: var(--fs-large);
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    p {
        color: var(--color-four);
        font-size: var(--fs-regular);
    }
`
export const ChooseUsRightCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
`
export const ChooseUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        font-size: var(--fs-regular);
        margin-bottom: 1rem;
    }
    p {
        color: var(--color-four);
        font-size: var(--fs-small);
    }
`