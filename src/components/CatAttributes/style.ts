import { styled } from 'styled-components'

export const Attributes = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
  margin-bottom: 3rem;

  strong {
    color: ${(props) => props.theme['gray-900']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: ${(props) => props.theme['font-text-m']};
    font-weight: 700;
    line-height: normal;
  }
  div {
    display: flex;
    span {
      display: inline-block;
      max-width: 60px;
      width: 100%;
      height: 12px;
      border-radius: 8px;
      background: ${(props) => props.theme['gray-400']};
      margin-right: 0.5rem;
    }
    span:last-child {
      margin-right: 0;
    }
    .filled {
      background: ${(props) => props.theme['gray-500']};
    }
  }
`
