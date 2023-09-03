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
export const WhyHaveCat = styled.section`
  h2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: ${(props) => props.theme['font-title-l']};
    font-family: ${(props) => props.theme['font-normal']};
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2.5rem;

    &::before {
      content: '';
      width: 40px;
      height: 3px;
      background-color: ${(props) => props.theme['gray-600']};
    }
  }

  p {
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: ${(props) => props.theme['font-text-l']};
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1.5rem;
  }
`

export const BtnReadMore = styled.a`
  color: ${(props) => props.theme['gray-700']};
  font-family: ${(props) => props.theme['font-normal']};
  font-size: ${(props) => props.theme['font-text-s']};
  font-weight: 700;
  line-height: normal;

  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Gallery = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  img {
    max-width: 100%;
  }

  & img:first-child {
    grid-row: 1/1;
  }

  & img:nth-child(2) {
    grid-row: 1/3;
    max-width: 150px;
  }

  & img:nth-child(3) {
    max-width: 122px;
    justify-self: flex-end;
  }
`
