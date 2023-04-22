import styled from 'styled-components'

export const HeaderDiv = styled.header`
  padding: 30px;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    list-style: none;
  }
  @media (max-width: 480px) {
    img {
      width: 35px;
    }
    a {
      font-size: 13px;
    }
  }
  a {
    color: black;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid #6f42c1;
    }
  }
`
