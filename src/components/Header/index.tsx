import { NavLink } from 'react-router-dom'
import catWikiLogo from '../../assets/CatwikiLogo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={catWikiLogo} alt="CatWiki Logo" />
      </NavLink>
    </HeaderContainer>
  )
}
