import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
`
export const Hero = styled.section`
  background-color: ${(props) => props.theme['gray-900']};
  border-top-left-radius: 2.625rem;
  border-top-right-radius: 2.625rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 146px;
  justify-content: space-between;

  @media (min-width: 425px) {
    max-height: 538px;
    align-items: center;
  }
`
export const HeroData = styled.div`
  color: ${(props) => props.theme.white};
  padding-top: 1.25rem;
  padding-left: 1.875rem;

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

  @media (min-width: 425px) {
    max-height: 538px;
    padding-left: 3rem;
    h2 {
      font-size: ${(props) => props.theme['font-title-xl']};
    }

    p {
      font-size: ${(props) => props.theme['font-text-s']};
      max-width: 100%;
      letter-spacing: 1.125px;
    }
  }

  @media (min-width: 768px) {
    padding-left: 6rem;
    h2 {
      font-size: ${(props) => props.theme['font-title-xxl']};
    }

    p {
      font-size: ${(props) => props.theme['font-title-s']};
      max-width: 320px;
      letter-spacing: 1.125px;
      margin-bottom: 3.5rem;
    }
  }
`
export const HeroImage = styled.div`
  text-align: right;
  height: 100%;
  max-height: 146px;
  img {
    width: 100%;
    height: 100%;
    max-height: 538px;
    border-top-right-radius: 3rem;
  }
  @media (min-width: 425px) {
    max-height: 538px;
  }
`
export const WhyHaveCat = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  div {
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
  }
  @media (min-width: 768px) {
    align-items: center;
    gap: 4rem;
    padding: 0 6rem;

    div {
      h2 {
        font-size: ${(props) => props.theme['font-title-xl']};
        &::before {
          width: 68px;
        }
      }

      p {
        margin-bottom: 4rem;
      }
    }
  }
  @media (min-width: 1020px) {
    grid-template-columns: 50% 50%;
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

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme['font-text-l']};
    svg {
      font-size: ${(props) => props.theme['font-text-xl']};
    }
  }
`
export const Gallery = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  & img:first-child {
    grid-row: 1/1;
    justify-self: flex-end;
    max-width: 172px;
    width: 100%;
  }

  & img:nth-child(2) {
    grid-row: 1/3;
    max-width: 150px;
    width: 100%;
  }

  & img:nth-child(3) {
    max-width: 122px;
    width: 100%;
    justify-self: flex-end;
  }
  @media (min-width: 768px) {
    & img:first-child {
      max-width: 273px;
      width: 100%;
    }
    & img:nth-child(2) {
      max-width: 238px;
      width: 100%;
    }
    & img:nth-child(3) {
      max-width: 195px;
      width: 100%;
    }

    margin-bottom: 6rem;
  }

  @media (min-width: 1024px) {
    & img:nth-child(3) {
      width: 80%;
    }
  }
`
