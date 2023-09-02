import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1248px;
  min-height: calc(100vh - 180px);
`
export const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme['gray-900']};
  border-top-left-radius: 2.625rem;
  border-top-right-radius: 2.625rem;

  @media (max-width: 400px) {
    max-height: 146px;
  }
`
export const HeroData = styled.div`
  color: ${(props) => props.theme.white};
  padding: 1.25rem 0 1.5rem 1.875rem;
  width: 50%;
  h2 {
    font-size: ${(props) => props.theme['font-text-s']};
    font-family: ${(props) => props.theme['font-display']};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${(props) => props.theme['font-text-xs']};
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1.125rem;
    max-width: 125px;
  }
`
export const SearchBar = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 8px 0;
  border-radius: 1rem;
  width: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    max-width: 50%;
    border: none;
    outline: none;
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: 0.75rem;
    font-weight: 500;
  }

  svg {
    color: ${(props) => props.theme['gray-800']};
  }
`

export const HeroImage = styled.div`
  width: 50%;
  text-align: right;
  img {
    max-width: 100%;
    height: 100%;
    border-top-right-radius: 3rem;
  }
`
