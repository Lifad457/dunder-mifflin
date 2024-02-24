import { BestSellers, HeroButton, HeroContainer, HeroImage, LeftColumn, RightColumn } from '../styles/home.css'
import { GlobalStyle } from '../styles/global.css'
import heroImg from '../assets/images/hero-img.png'
import Card from '../components/Card'
import { CardContainer } from '../styles/card.css'

function Home() {

  return (
    <>
      <GlobalStyle />
      <HeroContainer>
        <LeftColumn>
          <h2>Dunder Mifflin :</h2>
          <h1>Where <span>Every</span> Sheet</h1>
          <h1>Tells a Story!</h1>
          <HeroButton>Shop Now</HeroButton>
        </LeftColumn>
        <RightColumn>
          <HeroImage src={heroImg} alt="hero" />
        </RightColumn>
      </HeroContainer>
      <BestSellers>
        <h1>Best Sellers</h1>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </BestSellers>
    </>
  )
}

export default Home
