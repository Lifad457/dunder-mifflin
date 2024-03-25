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
        max-width: 28rem;
        min-width: 28rem;
        grid-template-areas:
            "email email phone"
            "first-name first-name last-name"
            "address address address"
            "city city postal-code"
            "country . .";

        .email {
            grid-area: email;
        }
        .first-name {
            grid-area: first-name;
        }
        .last-name {
            grid-area: last-name;
        }
        .address {
            grid-area: address;
        }
        .city {
            grid-area: city;
        }
        .postal-code {
            grid-area: postal-code;
        }
        .country {
            grid-area: country;
        }
        .phone {
            grid-area: phone;
        }
        gap: .5rem;
        margin-top: 2rem;

        input {
            width: 100%;
            background: #EDEDED;
            border: 1px solid #C7C7C7;
            font-size: var(--fs-small);
            padding: .75rem;
            margin-bottom: 1rem;
        }
        select {
            width: 107%;
            background: #EDEDED;
            border: 1px solid #C7C7C7;
            font-size: var(--fs-small);
            padding: .75rem;
            margin-bottom: 2.5em;
            color: #6F6F6F;
        }
    }

    .card-info {
        display: flex;
        gap: 1rem;
        input {
            width: 100%;
            background: #EDEDED;
            border: 1px solid #C7C7C7;
            font-size: var(--fs-small);
            padding: .75rem;
            outline: none;
            margin-bottom: 2.5em;
        }
        .expiry-date {
            min-width: 6.5rem;
            max-width: 6.5rem;
        }
        .cvv {
            min-width: 6.5rem;
            max-width: 6.5rem;
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
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
        font-size: var(--fs-regular);
        margin: 1rem 0;
    }
    p {
        font-size: var(--fs-small);
        font-weight: var(--fw-medium);
        margin-bottom: 1rem;
        text-align: left;
    }
    span {
        font-size: var(--fs-regular);
        font-weight: var(--fw-bold);
    }
    .total {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: .5rem 1rem;
        border-top: 1px solid var(--color-five);
        border-bottom: 1px solid var(--color-five);
        text-align: right;
        align-items: baseline;
    }
    ul {
        list-style: none;
    }

    li {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: .5rem 1rem;
        text-align: right;
        align-items: baseline;
    }
`