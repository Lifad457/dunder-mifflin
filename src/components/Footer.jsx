import { FooterContainer } from "../styles/footer.css";

export default function Footer() {
    return (
        <FooterContainer>
            <section>
                <p>PAPER Company</p>
                <p>All the furnitures you need for your business.</p>
                <p>(123)-456-789</p>
                <p>dundermifflin@fake.com</p>
                <p>Design by Bison Cédric</p>
            </section>
            <section>
                <p>WORKING HOURS</p>
                <p>Mon - Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 19:00PM</p>
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