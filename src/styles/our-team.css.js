import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 4rem;
    max-width: 90rem;
    margin: 0 auto;
    margin-top: 2rem;
`
export const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 3rem;
    padding: 2rem 0;
`
export const TeamMember = styled.div`
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    min-height: 40rem;
    margin: 0 auto;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0 1.6rem .2rem rgba(0, 0, 0, .5);

    img {
        width: 18.75rem;
        height: 18.75rem;
        object-fit: cover;
        object-position: top;
    }
`
export const TeamMemberDesc = styled.div`
    padding: .75rem;
    h3 {
        font-size: var(--fs-medium);
        font-weight: var(--fw-bold);
        margin: .75rem 0;
    }
    h5 {
        font-size: var(--fs-small);
        font-weight: var(--fw-bold);
        margin: .75rem 0;
    }
`
