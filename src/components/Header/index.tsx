import catWikiLogo from '../../assets/CatwikiLogo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={catWikiLogo} alt="CatWiki Logo" />
    </HeaderContainer>
  )
}
