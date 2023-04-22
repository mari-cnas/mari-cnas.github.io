import styled from 'styled-components'

export const RightDiv = styled.div`
  background-color: #6f42c1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  svg {
    max-width: 100%;
  }
  svg line {
    fill: none;
    stroke: #000;
    stroke-width: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation-delay: 0.5s;
  }
  @media (max-width: 480px) {
    height: auto;
  }
`
