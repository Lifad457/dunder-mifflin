import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 4rem;
    
    p {
        font-size: var(--fs-regular);
    }
`
const TestimonialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 70rem;
    gap: 2rem;
    margin-top: 6rem;
    margin-bottom: 10rem;
    padding: 4rem;
    border-radius: 1rem;
    box-shadow: 0 0 1.6rem .2rem rgba(0, 0, 0, .5);
    background-color: var(--color-white);
    color: var(--color-font);
    font-size: var(--fs-regular);
`
export const LeftContainer = styled(TestimonialsContainer)`
    text-align: left;
`
export const RightContainer = styled(TestimonialsContainer)`
    margin-left: auto;
    margin-right: 0;
    text-align: right;
`
const Quote = styled.div`
    position: absolute;
    font-size: 4rem;
    color: var(--color-three);
    z-index: 1;
`
export const RightQuote = styled(Quote)`
    top: -2.8rem;
    left: 3rem;
`
export const LeftQuote = styled(Quote)`
    top: -2.2rem;
    right: 3rem;
`