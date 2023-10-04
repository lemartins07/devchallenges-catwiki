import { MostSearchedsContainer, Gallery } from './styles'

import { NavLink } from 'react-router-dom'
import { Cats } from '../../pages/Home'

export function MostSearcheds({ data }: Cats) {
  return (
    <MostSearchedsContainer>
      <strong>Most Searched Breeds</strong>
      <h2>
        66+ Breeds For you <br />
        to discover
      </h2>
      <Gallery>
        {data &&
          data.map((item) => (
            <div key={item.reference_image_id}>
              <NavLink to={`details/${item.reference_image_id}`}>
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
