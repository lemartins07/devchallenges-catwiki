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
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  gap: 0.5rem;
  align-items: center;

  div {
    img {
      width: 134px;
      height: 134px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 0.75rem;
      @media (min-width: 400px) {
        width: 220px;
        height: 220px;
      }
    }
    p {
      color: ${(props) => props.theme['gray-800']};
      font-family: ${(props) => props.theme['font-normal']};
      font-size: ${(props) => props.theme['font-text-s']};
      font-weight: 600;
    }
  }
`
