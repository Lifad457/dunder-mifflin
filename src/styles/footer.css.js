import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 4rem;
    padding: 4rem 4rem;
    max-width: 90rem;
    margin: 0 auto;
    color: var(--color-black);

    @media (max-width: 980px) { 
        flex-direction: column;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: 1rem;
    }
    input {
        padding: .5rem;
        border: 1px solid var(--color-five);
        border-radius: .2rem;
    }
    button {
        display: inline-block;
        padding: .5rem 1.5rem;
        font-size: var(--fs-small);
        font-weight: var(--fw-bold);
        color: var(--color-white);
        border: none;
        border-radius: .2rem;
        background-color: var(--color-three);
        box-shadow: 0 5px 15px 0 rgba(255,83,48,.35);

        cursor: pointer;
    }
`