import { GlobalStyle } from "../styles/global.css";
import { Wrapper } from "../styles/wrapper.css";

export default function Checkout() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Secure Checkout</h1>
                <h2>1. Billing & Shipping</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" required />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" required />
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required />
                    <label htmlFor="postal-code">Postal Code</label>
                    <input type="text" id="postal-code" required />
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" required />
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" required />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" required />
                </form>
                <h2>2. Payment</h2>
                <form>
                    <label htmlFor="card-number">Card Number</label>
                    <input type="text" id="card-number" required />
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input type="text" id="expiry-date" required />
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" required />
                    <p>* Do not give your real credit card info, it's a fake website</p>
                    <button>Buy now !</button>
                </form>
                <div>
                    <h2>3. Order Summary</h2>
                    <h3>2 items</h3>
                    <h3>Total: 20€</h3>
                </div>
            </Wrapper>
        </>
    )
}