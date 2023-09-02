import { Hero, HeroData, HeroImage, HomeContainer, SearchBar } from './styles'
import heroImg from '../../assets/HeroImagemd2.png'
import { MagnifyingGlass } from 'phosphor-react'
import { MostSearcheds } from '../../components/MostSearcheds'

export function Home() {
  return (
    <HomeContainer>
      <Hero>
        <HeroData>
          <h2>CatWiki</h2>
          <p>Get to know more about your cat breed</p>
          <SearchBar>
            <input type="text" placeholder="Search" />
            <MagnifyingGlass size={15} />
          </SearchBar>
        </HeroData>
        <HeroImage>
          <img src={heroImg} alt="Hero" />
        </HeroImage>
      </Hero>
      <MostSearcheds />
    </HomeContainer>
  )
}
