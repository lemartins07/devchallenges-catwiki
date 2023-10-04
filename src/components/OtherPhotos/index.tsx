import { OtherPhotosContainer } from './styles'
import { useEffect, useState } from 'react'

interface OtherPhotosProps {
  breedsId: string
}

interface Images {
  height: number
  id: string
  url: string
  width: number
}

export function OtherPhotos({ breedsId }: OtherPhotosProps) {
  const [images, setImages] = useState<Images[] | []>([])

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${breedsId}&limit=8`,
        )
        setImages(await response.json())
      } catch (err) {
        console.log(err)
      }
    }

    getImages()
  }, [breedsId])
  return (
    <OtherPhotosContainer>
      <h2>Other photos</h2>
      <div>
        {images &&
          images.map((img) => <img key={img.id} src={img.url} alt={img.id} />)}
      </div>
    </OtherPhotosContainer>
  )
}
