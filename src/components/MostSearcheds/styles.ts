import { styled } from 'styled-components'

export const MostSearchedsContainer = styled.section`
  background-color: ${(props) => props.theme['gray-300']};
  padding: 1.125rem 1.875rem 4rem;
  border-bottom-left-radius: 2.625rem;
  border-bottom-right-radius: 2.625rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-bottom: 4rem;

  strong {
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: ${(props) => props.theme['font-text-s']};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 6px;

    &::after {
      content: '';
      width: 40px;
      height: 3px;
      background-color: ${(props) => props.theme['gray-600']};
    }
  }

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: ${(props) => props.theme['font-title-s']};
    font-weight: 700;
  }

  @media (min-width: 400px) {
    padding: 1.5rem 6rem 6rem;
    gap: 2.875rem;
    strong {
      font-size: ${(props) => props.theme['font-text-l']};
      &::after {
        width: 60px;
      }
    }

    h2 {
      font-size: ${(props) => props.theme['font-title-xl']};
      line-height: normal;
    }
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  gap: 0.5rem;
  align-items: center;

  & div:first-child {
    position: relative;
  }

  & div:first-child::after {
    content: '';
    width: 4px;
    height: 100px;
    background-color: ${(props) => props.theme['yellow-500']};
    position: absolute;
    top: 17px;
    left: -4px;
    z-index: 0;
    border-top-left-radius: 4rem;
    border-bottom-left-radius: 4rem;
  }

  div {
    img {
      width: 134px;
      height: 134px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 0.75rem;
    }
    p {
      color: ${(props) => props.theme['gray-800']};
      font-family: ${(props) => props.theme['font-normal']};
      font-size: ${(props) => props.theme['font-text-s']};
      font-weight: 600;
    }
  }

  @media (min-width: 400px) {
    div {
      img {
        width: 220px;
        height: 220px;
      }
      p {
        font-size: ${(props) => props.theme['font-text-l']};
      }
    }
  }
`
