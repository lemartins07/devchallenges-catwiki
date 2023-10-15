import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  position: relative;
`

export const SearchBarBox = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 8px 0;
  border-radius: 1rem;
  width: 90px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    max-width: 50px;
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    color: ${(props) => props.theme['gray-800']};
    font-family: ${(props) => props.theme['font-normal']};
    font-size: 0.75rem;
    font-weight: 500;

    &::placeholder {
      color: ${(props) => props.theme['gray-800']};
      font-family: ${(props) => props.theme['font-normal']};
      font-size: 0.75rem;
      font-weight: 500;
    }
  }

  svg {
    color: ${(props) => props.theme['gray-800']};
  }

  @media (min-width: 425px) {
    width: 100%;
    height: 35px;
    justify-content: space-between;
    padding: 8px 30px;
    border-radius: 59px;
    input {
      font-size: ${(props) => props.theme['font-text-l']};
      width: 100%;
      max-width: 100%;
      &::placeholder {
        font-size: ${(props) => props.theme['font-text-l']};
      }
    }

    svg {
      font-size: ${(props) => props.theme['font-text-xl']};
    }
  }

  @media (min-width: 768px) {
    height: 70px;
    max-width: 394px;
  }
`
interface ResultContainerProps {
  length: number
}

export const ResultContainer = styled.div<ResultContainerProps>`
  background-color: ${(props) => props.theme.white};
  position: absolute;
  z-index: 1;

  max-height: 220px;
  height: 220px;
  width: 90px;
  margin-top: 1rem;
  border-radius: 24px;
  padding-top: 0.8rem;
  padding-left: 0.8rem;
  font-size: ${(props) => props.theme['font-text-l']};
  color: ${(props) => props.theme['gray-800']};
  font-family: ${(props) => props.theme['font-normal']};
  overflow-y: hidden;
  div {
    overflow-y: scroll;
    max-height: 95%;
    width: 98%;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
      width: 4px;
      background-color: #f2f2f2;
      border-radius: 24px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #bdbdbd;
      border-radius: 24px;
    }

    ul {
      list-style: none;

      li {
        height: 56px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        padding-left: 0.8rem;
      }

      li:hover {
        background-color: #9797971a;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 425px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 394px;
  }
`
