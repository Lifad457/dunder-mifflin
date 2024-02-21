import styled from "styled-components";

export const HomeContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`
export const HeroImage = styled.div`
    display: flex;
    gap: 4rem;
    padding: 4rem;
    color: var(--color-black);
    justify-content: center;
`
export const LeftColumn = styled.div`
    display: block;
    color: var(--color-black);
    margin: auto 0;

    h1 {
        font-size: var(--fs-extra-large);
        font-weight: var(--fw-black);
    }
    h2 {
        font-size: var(--fs-medium);
        font-weight: var(--fw-bold);
    }
    span {
        color: var(--color-three);
    }
`
export const RightColumn = styled.div`
    img {
        width: 400px;
        margin-top: 1rem;
    }
`
export const HeroButton = styled.button`
    display: inline-block;
    padding: .5rem 1.5rem;

    font-size: var(--fs-medium);
    font-weight: var(--fw-bold);
    color: var(--color-white);
    border: none;
    border-radius: .2rem;
    background-color: var(--color-three);
    box-shadow: 0 10px 15px 0 rgba(255,83,48,.35);

    cursor: pointer;
    margin-top: 2rem;
`