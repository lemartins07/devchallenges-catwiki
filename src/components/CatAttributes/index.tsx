import { CatDetail } from '../../pages/Details'
import { CatAttributesItem } from '../CatAttributesItem'
import { Attributes } from './style'

interface CatAttributesProps {
  catDetail: CatDetail
}

export function CatAttributes({ catDetail }: CatAttributesProps) {
  return (
    <Attributes>
      <CatAttributesItem
        attribute="Adaptability"
        score={catDetail.breeds[0].adaptability}
      />
      <CatAttributesItem
        attribute="Affection level"
        score={catDetail.breeds[0].affection_level}
      />
      <CatAttributesItem
        attribute="Child Friendly"
        score={catDetail.breeds[0].child_friendly}
      />
      <CatAttributesItem
        attribute="Grooming"
        score={catDetail.breeds[0].grooming}
      />
      <CatAttributesItem
        attribute="Intelligence"
        score={catDetail.breeds[0].intelligence}
      />
      <CatAttributesItem
        attribute="Health issues"
        score={catDetail.breeds[0].health_issues}
      />
      <CatAttributesItem
        attribute="Social needs"
        score={catDetail.breeds[0].social_needs}
      />
      <CatAttributesItem
        attribute="Stranger friendly"
        score={catDetail.breeds[0].stranger_friendly}
      />
    </Attributes>
  )
}
