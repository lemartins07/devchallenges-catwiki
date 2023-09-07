import { styled } from 'styled-components'

export const DetailsContainer = styled.section`
  @media (min-width: 768px) {
    padding: 0 3rem;
  }
`
export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  img {
    max-width: 370px;
    max-height: 370px;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    justify-self: center;
  }

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: ${(props) => props.theme['font-text-l']};
    font-weight: 500;
    line-height: normal;
    margin-bottom: 2rem;
  }

  ul li {
    color: ${(props) => props.theme['gray-900']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: ${(props) => props.theme['font-text-m']};
    list-style: none;
    margin-bottom: 2rem;

    span {
      display: inline-block;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-right: 0.25rem;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    img {
      object-fit: cover;
    }
  }
`
