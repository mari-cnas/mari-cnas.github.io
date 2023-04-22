import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import Description from 'components/Description/Description'
import Header from 'components/Header/Header'
import LanguageSwitcher from 'components/LanguageSwitcher'
import Programmer from 'components/Programmer/Programmer'
import Title from 'components/Title/Title'

import useTitle from 'hooks/useTitle'

import { Link } from './styled'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <div className="d-flex flex-column flex-lg-row">
      <div className="w-100  w-lg-50">
        <Header />
        <Container className="d-flex flex-column">
          <div className="d-flex flex-column align-items-center ">
            <Title text="Olá!" />
            <Title text="eu sou a Mariana C. Nascimento," />
            <Title text="  Front-end Developer" />
            <Description text="Uma pessoa curiosa, que tem amor ao aprendizado e que busca constantemente o desenvolvimento pessoal. Gosto de estar por dentro das novas tecnologias e procuro me manter informada do que acontece no mundo.Se quiser conhecer mais sobre meu trabalho, acesse meu portfólio no link abaixo: " />
            <Link href="https://marianacarvalho.netlify.app/">PORTFÓLIO</Link>
          </div>
        </Container>
      </div>
      <div className="w-100 w-lg-50">
        <Programmer />
      </div>
    </div>
  )
}

export default memo(Home)
