import styled from 'styled-components'

export const OtherPhotosContainer = styled.div`
  margin-bottom: 5rem;

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: 2.25rem;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 2.5rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;

    img {
      max-width: 278px;
      max-height: 278px;
      width: 100%;
      height: 100%;
      border-radius: 24px;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 7rem;

    div {
      grid-template-columns: repeat(4, 1fr);
      gap: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 10rem;
    div {
      gap: 2.875rem;
    }
  }
`
