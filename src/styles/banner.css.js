import styled from "styled-components"; 
import { BsTelephone } from "react-icons/bs";

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 4rem 2rem;
    background-color: var(--color-four);
    gap: 2rem;

    h1 {
        font-size: var(--fs-large);
        color: var(--color-white);
    }
    span {
        color: var(--color-three);
    }

    @media (max-width: 980px) {
        flex-direction: column;
    }
`
export const TelIcon = styled(BsTelephone)`
    font-size: 2.8rem;
`