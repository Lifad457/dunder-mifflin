import { FooterContainer } from "../styles/footer.css";

export default function Footer() {
    return (
        <FooterContainer>
            <section>
                <p>Scranton Business Park</p>
                <p>Dunder Mifflin Paper Co.</p>
                <p>1725 Slough Ave Suit 200</p>
                <p>Scranton PA, 18505</p>
                <p>(123)-456-789</p>
                <p>dundermifflin@fake.com</p>
            </section>
            <section>
                <p>WORKING HOURS</p>
                <p>Mon - Fri: 9:00AM - 5:00PM</p>
                <p>Sat: Closed</p>
                <p>Sun: Closed</p>
            </section>
            <section>
                <p>SUBSCRIPTION</p>
                <p>Subscribe your Email address<br/>for latest news & updates.</p>
                <input type="email" />
                <button>Subscribe</button>
            </section>
        </FooterContainer>
    )
}