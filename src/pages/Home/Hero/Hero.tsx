import { FC } from 'react'
import UContainer from '../../../components/UContainer/UContainer'
import heroImg from '../../../assets/img-10.avif'
import mailIcon from '../../../assets/Group.svg'
import './Hero.scss'

const Hero: FC = () => {
  return <div className='hero'>
    <UContainer>
      <div className="hero__wrap">
        <div className="hero__content">
          <h1>Hi, I'm Zohid Frontend Developer!</h1>
          <p>I am ready to learn and grow to become even more qualified. I am confident that I can help you become a team member and make your company successful.</p>
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