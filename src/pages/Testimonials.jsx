import { GlobalStyle } from "../styles/global.css";
import { LeftContainer, LeftQuote, RightContainer, RightQuote, Wrapper } from "../styles/testimonials.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <LeftContainer>
                    <LeftQuote><FaQuoteLeft /></LeftQuote>
                    <p>In the vast expanse of space, reliability is paramount. Dunder Mifflin's paper supplies have consistently met our needs onboard the Galactica. From critical reports to personal correspondence, their paper has proven its worth time and again. When it comes to quality and dependability, Dunder Mifflin is our go-to choice.</p>
                    <p>-Commander William Adama</p>
                </LeftContainer>
                <RightContainer>
                    <RightQuote><FaQuoteRight /></RightQuote>
                    <p>As the leader of the Twelve Colonies, I have to make countless decisions every day. Choosing Dunder Mifflin for our paper needs was one of the best decisions I've made. Their products are not only top-notch but their customer service is exceptional. Whether it's a crisis or routine order, Dunder Mifflin delivers with efficiency and professionalism.</p>
                    <p>-President Laura Roslin</p>
                </RightContainer>
                <LeftContainer>
                    <LeftQuote><FaQuoteLeft /></LeftQuote>
                    <p>When you're out there, flying through the stars, the last thing you want to worry about is whether your paperwork will hold up. That's why I trust Dunder Mifflin. Their paper is sturdy, reliable, and perfect for scribbling down flight plans or leaving notes for my fellow pilots. Plus, their prices can't be beaten. Dunder Mifflin gets the job done, no frakkin' questions asked.</p>
                    <p>-Lieutenant Kara "Starbuck" Thrace</p>
                </LeftContainer>
            </Wrapper>
        </>
    )
}