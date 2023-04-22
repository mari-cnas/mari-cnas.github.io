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
    font-weight: 700;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid #f85f8b;
    }
  }
`
export const Link = styled.a`
  font-size: 20px;
  text-decoration: none;
`
