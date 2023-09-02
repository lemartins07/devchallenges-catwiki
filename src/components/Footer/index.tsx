import { FooterContainer } from './styles'
import catWikiLogo from '../../assets/CatwikiLogo.svg'

export function Footer() {
  return (
    <FooterContainer>
      <img src={catWikiLogo} alt="Logo" />
      <div>
        <p>
          © created by <span>username</span> - <span>devChallenge.io</span>{' '}
          2021
        </p>
      </div>
    </FooterContainer>
  )
}
