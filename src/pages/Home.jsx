import Header from '../components/Header'
import { HeroButton, HeroImage, HomeContainer, LeftColumn, RightColumn } from '../styles/home.css'
import { GlobalStyle } from '../styles/global.css'
import heroImg from '../assets/images/hero-img.png'

function Home() {

  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <Header />
        <HeroImage>
          <LeftColumn>
            <h2>Dunder Mifflin :</h2>
            <h1>Where <span>Every</span> Sheet</h1>
            <h1>Tells a Story!</h1>
            <HeroButton>Shop Now</HeroButton>
          </LeftColumn>
          <RightColumn>
            <img src={heroImg} alt="hero" />
          </RightColumn>
        </HeroImage>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
      </HomeContainer>
    </>
  )
}

export default Home
