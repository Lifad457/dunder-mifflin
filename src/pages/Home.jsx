import { Wrapper } from '../styles/wrapper.css'
import { BestSellers } from '../styles/best-sellers.css'
import { HeroButton, HeroContainer, HeroImage, HeroLeftCol, HeroRightCol } from '../styles/hero.css'
import { GlobalStyle } from '../styles/global.css'
import heroImg from '../assets/images/hero-img.png'
import Card from '../components/Card'
import { CardContainer } from '../styles/card.css'
import { ChooseUsContainer, ChooseUsLeftCol, ChooseUsRightCol, ChooseUsWrapper } from '../styles/choose-us.css'

function Home() {

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <HeroContainer>
          <HeroLeftCol>
            <h2>Dunder Mifflin :</h2>
            <h1>Where <span>Every</span> Sheet</h1>
            <h1>Tells a Story!</h1>
            <HeroButton>Shop Now</HeroButton>
          </HeroLeftCol>
          <HeroRightCol>
            <HeroImage src={heroImg} alt="hero" />
          </HeroRightCol>
        </HeroContainer>
        <BestSellers>
          <h1>Best Sellers</h1>
          <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardContainer>
        </BestSellers>
        <ChooseUsContainer>
          <ChooseUsLeftCol>
            <h3>Why Choose Us</h3>
            <h1>Experience the difference with Dunder Mifflin</h1>
            <p>Where quality, service, and affordability meet to elevate your business to new heights! Contact us today and let us show you why we're the top choice for businesses like yours.</p>
          </ChooseUsLeftCol>
          <ChooseUsRightCol>
            <ChooseUsWrapper>
              <h1>Personalized Service:</h1>
              <p>At Dunder Mifflin, we believe in going above and beyond for our customers. Say goodbye to generic service and hello to a personalized experience tailored just for you! Our dedicated sales representatives, like the dynamic duo of Dwight Schrute and Jim Halpert, are here to ensure your needs are not just met, but exceeded. With us, you're not just a number – you're part of the Dunder Mifflin family!</p>
            </ChooseUsWrapper>
            <ChooseUsWrapper>
              <h1>Wide Range of Products:</h1>
              <p>Need paper? We've got you covered! From standard printer paper to specialty products, Dunder Mifflin is your one-stop shop for all things paper and office supplies. No matter the size or scope of your order, we have the variety you need to keep your business running smoothly. Efficiency and convenience are our middle names!</p>
            </ChooseUsWrapper>
            <ChooseUsWrapper>
              <h1>Competitive Pricing:</h1>
              <p>Quality doesn't have to break the bank, and at Dunder Mifflin, we prove it every day. Our competitive pricing ensures you get the best value for your money without sacrificing quality. Plus, with special discounts for bulk orders and loyal customers, saving money has never been easier. Why settle for less when you can have the best with Dunder Mifflin?</p>
            </ChooseUsWrapper>
          </ChooseUsRightCol>
        </ChooseUsContainer>
      </Wrapper>
    </>
  )
}

export default Home
