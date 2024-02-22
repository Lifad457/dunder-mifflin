import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 3rem;
    padding: 2rem 0;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-five);
    border-radius: 0.3rem;
`