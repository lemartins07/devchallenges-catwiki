import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding-left: 1.875rem;
  padding-top: 2.25rem;
  padding-bottom: 1.5rem;
  background-color: ${(props) => props.theme['gray-900']};
  border-top-left-radius: 2.625rem;
  border-top-right-radius: 2.625rem;
  color: ${(props) => props.theme.white};

  svg {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  .copyright {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .user {
    font-weight: bold;
  }
  .user,
  .devchallenge {
    color: ${(props) => props.theme.white};
    margin: 0 0.25rem;
  }

  .devchallenge {
    text-decoration: none;
  }

  @media (min-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 6rem;
    padding-top: 2.25rem;
    padding-right: 2rem;

    p {
      font-size: ${(props) => props.theme['font-text-l']};
    }
  }
`
