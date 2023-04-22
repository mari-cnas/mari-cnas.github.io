import { memo } from 'react'

import { MainTitle } from './styled'

interface ITitleProps {
  children?: React.ReactNode
  text: string
}

const Title: React.FC<ITitleProps> = ({ text }) => {
  return <MainTitle>{text}</MainTitle>
}
export default memo(Title)
