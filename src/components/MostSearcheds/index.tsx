import { MostSearchedsContainer, Gallery } from './styles'
import img1 from '../../assets/image1.png'

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
          <img src={img1} alt="Imagem 1" />
          <p>Nome do Gato</p>
        </div>
        <div>
          <img src={img1} alt="Imagem 1" />
          <p>Nome do Gato</p>
        </div>
        <div>
          <img src={img1} alt="Imagem 1" />
          <p>Nome do Gato</p>
        </div>
        <div>
          <img src={img1} alt="Imagem 1" />
          <p>Nome do Gato</p>
        </div>
      </Gallery>
    </MostSearchedsContainer>
  )
}
