import { ContactContainer, ContactLeftCol, ContactRightCol, ContactStyledForm, MailIcon, PositionIcon, TelIcon } from "../styles/contact.css";
import { GlobalStyle } from "../styles/global.css";
import { Wrapper } from "../styles/wrapper.css";

export default function Contact() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContactContainer>
                    <ContactLeftCol>
                        <h1>Need additional information?</h1>
                        <p><span><TelIcon /></span> (123)-456-789</p>
                        <p><span><MailIcon /></span> dundermifflin@fake.com</p>
                        <p><span><PositionIcon /></span> Scranton PA, 18505</p>
                    </ContactLeftCol>
                    <ContactRightCol>
                        <ContactStyledForm>
                            <form>
                                <label htmlFor="name">Full Name <span>*</span></label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" id="email" name="email" placeholder="youremail@example.com" required />
                                <label htmlFor="message">Tell us about it <span>*</span></label>
                                <textarea id="message" name="message" placeholder="Write Here ..." required></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </ContactStyledForm>
                    </ContactRightCol>
                </ContactContainer>
            </Wrapper>
        </>
    )
}