import { OtherPhotosContainer } from './styles'
import img2 from '../../assets/dummy_278x278_ffffff_0f8c11.png'

export function OtherPhotos() {
  return (
    <OtherPhotosContainer>
      <h2>Other photos</h2>
      <div>
        <img src={img2} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img2} alt="img3" />
        <img src={img2} alt="img4" />
        <img src={img2} alt="img5" />
        <img src={img2} alt="img6" />
        <img src={img2} alt="img7" />
        <img src={img2} alt="img8" />
      </div>
    </OtherPhotosContainer>
  )
}
