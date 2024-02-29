import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 5rem 0;

    span {
        color: var(--color-three);
    }

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
        text-align: center;
        align-items: center;
    }
`
export const ContactLeftCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    h1 {
        font-size: var(--fs-large);
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    p {
        color: var(--color-four);
        font-size: var(--fs-medium);
    }
`
export const ContactRightCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
`
export const TelIcon = styled(BsTelephone)`
    font-size: var(--fs-medium);
`
export const MailIcon = styled(MdOutlineMail)`
    font-size: var(--fs-medium);
`
export const PositionIcon = styled(GiPositionMarker)`
    font-size: var(--fs-medium);
`
export const ContactStyledForm = styled.div`
    label {
        display: block;
        font-size: var(--fs-medium);
        margin-bottom: .75rem;
        font-weight: 500;
    }

    input {
        width: 100%;
        background: #EDEDED;
        border: 1px solid #C7C7C7;
        font-size: var(--fs-small);
        padding: .75rem;
        outline: none;
        margin-bottom: 2.5em;
    }

    textarea {
        width: 100%;
        background: #EDEDED;
        border: 1px solid #C7C7C7;
        font-size: var(--fs-small);
        padding: .75rem;
        outline: none;
        margin-bottom: 2.5em;
    }

    button {
        display: inline-block;
        padding: .75rem 1.5rem;

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