import { FooterContainer } from "../styles/footer.css";

export default function Footer() {
    return (
        <FooterContainer>
            <section>
                <h1>Scranton Business Park</h1>
                <p>Dunder Mifflin Paper Co.</p>
                <p>1725 Slough Ave Suit 200</p>
                <p>Scranton PA, 18505</p>
                <p>(123)-456-789</p>
                <p>dundermifflin@fake.com</p>
            </section>
            <section>
                <h1>Working Hours</h1>
                <p>Mon - Fri: 9:00AM - 5:00PM</p>
                <p>Sat: Closed</p>
                <p>Sun: Closed</p>
            </section>
            <section>
                <h1>Subscription</h1>
                <p>Subscribe your Email address<br/>for latest news & updates.</p>
                <form action="">
                    <input type="email" placeholder="Enter your Email Adress" />
                    <button>Subscribe</button>
                </form>
            </section>
        </FooterContainer>
    )
}