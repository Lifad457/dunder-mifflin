import styled from "styled-components";
import heroBG from "../assets/images/hero-bg.png";

export const Wrapper = styled.div`
    padding: 0 4rem;
    max-width: 90rem;
    margin: 0 auto;
`
export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    color: var(--color-black);
    
    @media (max-width: 980px) {
        flex-direction: column-reverse;
        text-align: center;
    }
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
    display: block;
    margin: auto 0;
`
export const HeroImage = styled.img`
    height: auto;
    background: url(${heroBG}) no-repeat bottom center;
    background-size: contain;
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