import { DetailsContainer, HeroContainer } from './styles'
import img from '../../assets/HeroImagemd2.png'

import { CatAttributes } from '../../components/CatAttributes'
import { OtherPhotos } from '../../components/OtherPhotos'

export function Details() {
  return (
    <DetailsContainer>
      <HeroContainer>
        <img src={img} alt="Imagem" />
        <div>
          <h2>Bengal</h2>
          <p>
            Bengals are a lot of fun to live with, but they`&apos;`re definitely
            not the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn`&apos;`t provide it.
          </p>

          <ul>
            <li>
              <span>Temperament:</span>Alert, Agile, Energetic, Demanding,
              Intelligent
            </li>
            <li>
              <span>Origin: </span>United States
            </li>
            <li>
              <span>Life Span:</span> 12 - 15 years
            </li>
          </ul>

          <CatAttributes />
        </div>
      </HeroContainer>
      <OtherPhotos />
    </DetailsContainer>
  )
}
