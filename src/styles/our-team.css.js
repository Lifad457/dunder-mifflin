import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 4rem;
    max-width: 90rem;
    margin: 0 auto;

    h1 {
        font-size: var(--fs-medium);
        font-weight: var(--fw-bold);
        padding: 0 4rem;
    }
`
export const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
    gap: 3rem;
    padding: 2rem 0;
`
export const TeamMember = styled.div`
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    min-height: 40rem;
    margin: 0 auto;

    img {
        width: 18.75rem;
        height: 18.75rem;
        object-fit: cover;
        object-position: top;
    }
    h3 {
        margin-top: 10px;
    }
    p {
        margin-top: 10px;
    }
`