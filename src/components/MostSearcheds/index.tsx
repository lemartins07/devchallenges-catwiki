import { MostSearchedsContainer, Gallery } from './styles'
import img1 from '../../assets/image1.png'
import { NavLink } from 'react-router-dom'
import { Cat, Cats } from '../../pages/Home'
import { useEffect, useState } from 'react'

export function MostSearcheds({ data }: Cats) {
  const [cats, setCats] = useState<Cat[] | null>(null)

  useEffect(() => {
    if (data !== null) {
      const iRandom1 = Math.floor(Math.random() * data.length)
      const iRandom2 = Math.floor(Math.random() * data.length)
      const iRandom3 = Math.floor(Math.random() * data.length)
      const iRandom4 = Math.floor(Math.random() * data.length)
      const selectsCats = data.slice(iRandom1 - 1, iRandom1)

      const cat1: Cat = { ...data.slice(iRandom2 - 1, iRandom2) }
      const cat2: Cat = { ...data.slice(iRandom3 - 1, iRandom3) }
      const cat3: Cat = { ...data.slice(iRandom4 - 1, iRandom4) }

      selectsCats.push(cat1[0])
      selectsCats.push(cat2[0])
      selectsCats.push(cat3[0])

      console.log('selectsCats: ', selectsCats)
      setCats(selectsCats)
    }
  }, [data])

  return (
    <MostSearchedsContainer>
      <strong>Most Searched Breeds</strong>
      <h2>
        66+ Breeds For you <br />
        to discover
      </h2>
      <Gallery>
        {cats &&
          cats.map((item) => (
            <div key={item.reference_image_id}>
              <NavLink to="/details">
                <img
                  src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </NavLink>
            </div>
          ))}
      </Gallery>
    </MostSearchedsContainer>
  )
}
