import { memo } from 'react'

import { DescriptionText } from './styled'

interface IDescriptionProps {
  children?: React.ReactNode
  text: string
}

const Description: React.FC<IDescriptionProps> = ({ text }) => {
  return <DescriptionText>{text}</DescriptionText>
}
export default memo(Description)
