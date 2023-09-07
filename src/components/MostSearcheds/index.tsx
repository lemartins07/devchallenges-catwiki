import { MostSearchedsContainer, Gallery } from './styles'
import img1 from '../../assets/image1.png'
import { NavLink } from 'react-router-dom'

export function MostSearcheds() {
  return (
    <MostSearchedsContainer>
      <strong>Most Searched Breeds</strong>
      <h2>
        66+ Breeds For you <br />
        to discover
      </h2>
      <Gallery>
        <div>
          <NavLink to="/details">
            <img src={img1} alt="Imagem 1" />
            <p>Nome do Gato</p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/details">
            <img src={img1} alt="Imagem 1" />
            <p>Nome do Gato</p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/details">
            <img src={img1} alt="Imagem 1" />
            <p>Nome do Gato</p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/details">
            <img src={img1} alt="Imagem 1" />
            <p>Nome do Gato</p>
          </NavLink>
        </div>
      </Gallery>
    </MostSearchedsContainer>
  )
}
