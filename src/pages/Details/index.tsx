import { DetailsContainer, HeroContainer } from './styles'

import { CatAttributes } from '../../components/CatAttributes'
import { OtherPhotos } from '../../components/OtherPhotos'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export interface CatDetail {
  id: string
  url: string
  breeds: [
    {
      weight: {
        imperial: string
        metric: string
      }
      id: string
      name: string
      cfa_url: string
      vetstreet_url: string
      vcahospitals_url: string
      temperament: string
      origin: string
      country_codes: string
      country_code: string
      description: string
      life_span: string
      indoor: number
      lap: number
      alt_names: string
      adaptability: number
      affection_level: number
      child_friendly: number
      dog_friendly: number
      energy_level: number
      grooming: number
      health_issues: number
      intelligence: number
      shedding_level: number
      social_needs: number
      stranger_friendly: number
      vocalisation: number
      experimental: number
      hairless: number
      natural: number
      rare: number
      rex: number
      suppressed_tail: number
      short_legs: number
      wikipedia_url: string
      hypoallergenic: number
      reference_image_id: string
    },
  ]
  width: 1204
  height: 1445
}

export function Details() {
  const { catId } = useParams()
  const [cat, setCat] = useState<CatDetail | null>(null)
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/${catId}`,
        )
        if (response.ok) {
          setCat(await response.json())
        }
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [catId])

  return (
    <DetailsContainer>
      {cat && (
        <HeroContainer>
          <img src={cat.url} alt={cat.breeds[0].name} />
          <div>
            <h2>{cat.breeds[0].name}</h2>
            <p>{cat.breeds[0].description}</p>

            <ul>
              <li>
                <span>Temperament:</span>
                {cat.breeds[0].temperament}
              </li>
              <li>
                <span>Origin: </span>
                {cat.breeds[0].origin}
              </li>
              <li>
                <span>Life Span:</span>
                {cat.breeds[0].life_span}
              </li>
            </ul>

            <CatAttributes catDetail={cat} />
          </div>
        </HeroContainer>
      )}
      <OtherPhotos breedsId={cat?.breeds[0].id || ''} />
    </DetailsContainer>
  )
}
