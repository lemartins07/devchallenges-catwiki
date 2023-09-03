import { FooterContainer } from './styles'
import catWikiLogoWhite from '../../assets/CatwikiLogoWhite.svg'

export function Footer() {
  return (
    <FooterContainer>
      <img src={catWikiLogoWhite} alt="Logo" />
      <div>
        <p>
          <span className="copyright">©</span> created by{' '}
          <a className="user" href="#">
            username
          </a>{' '}
          -{' '}
          <a className="devchallenge" href="#">
            devChallenge.io
          </a>{' '}
          2021
        </p>
      </div>
    </FooterContainer>
  )
}
