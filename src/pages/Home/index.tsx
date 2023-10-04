import {
  BtnReadMore,
  Gallery,
  Hero,
  HeroData,
  HeroImage,
  HomeContainer,
  SearchBar,
  WhyHaveCat,
} from './styles'
import heroImg from '../../assets/HeroImagemd2.png'
import { ArrowRight, MagnifyingGlass } from 'phosphor-react'
import { MostSearcheds } from '../../components/MostSearcheds'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import { useEffect, useState } from 'react'

import catsJson from '../../cats2.json'

export interface Cat {
  reference_image_id: string
  name: string
  url?: string
}

export interface Cats {
  data: Cat[]
}

export function Home() {
  const [cats, setCats] = useState<Cat[] | []>([])

  useEffect(() => {
    function getData() {
      setCats(catsJson)
    }

    getData()
  }, [])

  return (
    <HomeContainer>
      <Hero>
        <HeroData>
          <h2>CatWiki</h2>
          <p>Get to know more about your cat breed</p>
          <SearchBar>
            <input type="text" placeholder="Search" />
            <MagnifyingGlass />
          </SearchBar>
        </HeroData>
        <HeroImage>
          <img src={heroImg} alt="Hero" />
        </HeroImage>
      </Hero>
      <MostSearcheds data={cats} />
      <WhyHaveCat>
        <div>
          <h2>Why should you have a cat?</h2>
          <p>
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <BtnReadMore>
            READ MORE
            <ArrowRight />
          </BtnReadMore>
        </div>
        <Gallery>
          <img src={img2} alt="Imagem 2" />

          <img src={img3} alt="Imagem 3" />

          <img src={img1} alt="Imagem 1" />
        </Gallery>
      </WhyHaveCat>
    </HomeContainer>
  )
}
