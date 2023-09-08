import { FC } from 'react'
import UContainer from '../../../components/UContainer/UContainer'
import heroImg from '../../../assets/img-10.avif'
import mailIcon from '../../../assets/Group.svg'
import { useTranslation } from 'react-i18next'
import './Hero.scss'

const Hero: FC = () => {
  const { t } = useTranslation()
  return <div className='hero'>
    <UContainer>
      <div className="hero__wrap">
        <div className="hero__content">
          <h1>{t('home-hero.content-h1')}</h1>
          <p>{t('home-hero.content-text')}</p>
          <a className='email' href="mailto:777aaauz@gmail.com">
            <img src={mailIcon} alt="mail" />
            777aaauz@gmail.com
          </a>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
    </UContainer>
  </div>
}

export default Hero