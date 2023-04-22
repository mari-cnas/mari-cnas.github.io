import { memo, ReactElement } from 'react'

import girl from '../../assets/girl-coding.jpg'
import { RightDiv } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Programmer: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement
  return (
    <RightDiv>
      <img src={girl} alt="logo com símbolo de </>" className="img-fluid" />
    </RightDiv>
  )
}
export default memo(Programmer)
