import { memo, ReactElement } from 'react'

import code from '../../../code.svg'
import { HeaderDiv } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Header: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement
  return (
    <HeaderDiv>
      <nav>
        <ul>
          <li>
            <img src={code} width={30} alt="tag symbol" />
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/mari-cnas"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marianacnascimento/"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          {/* <li>
            <a
              target="_blank"
              href="https://medium.com/@larymagal"
              rel="noreferrer"
            >
              Blog
            </a>
          </li> */}
        </ul>
      </nav>
    </HeaderDiv>
  )
}
export default memo(Header)
