import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 2rem;
    padding: 2rem;
    margin: 2rem auto;
    border: 1px solid var(--color-three);
    border-radius: 2rem;
    max-width: 60rem;
    min-width: 60rem;
    background-color: var(--color-white);
    box-shadow: 0 0 1rem rgba(0,0,0,.2);

    h2 {
        font-size: var(--fs-medium);
        margin: 2rem 0 1rem 0;
    }

    @media (max-width: 980px) {
        flex-direction: column;
        max-width: 100%;
        min-width: 100%;
    }
`
export const CheckoutLeftCol = styled.div`
    form {
        display: grid;
        gap: 1rem;
        margin-top: 2rem;
        input {
            width: 100%;
            background: #EDEDED;
            border: 1px solid #C7C7C7;
            font-size: var(--fs-small);
            padding: .75rem;
            outline: none;
            margin-bottom: 2.5em;
        }
        select {
            width: 100%;
            background: #EDEDED;
            border: 1px solid #C7C7C7;
            font-size: var(--fs-small);
            padding: .75rem;
            outline: none;
            margin-bottom: 2.5em;
            color: #6F6F6F;
        }
    }
    button {
        display: inline-block;
        padding: .5rem 1.5rem;
        font-size: var(--fs-regular);
        font-weight: var(--fw-bold);
        color: var(--color-white);
        border: none;
        border-radius: .2rem;
        background-color: var(--color-three);
        box-shadow: 0 10px 15px 0 rgba(255,83,48,.35);
        cursor: pointer;
    }
`
export const CheckoutRightCol = styled.div`
    h3 {
        font-size: var(--fs-regular);
        margin: 1rem 0;
    }
`