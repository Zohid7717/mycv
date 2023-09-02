import { FC } from 'react'
import './Footer.scss'
import UContainer from '../UContainer/UContainer'
import GitHub from '../../assets/contact/github-142-svgrepo-com.svg'
import facebook from '../../assets/contact/facebook-svgrepo-com.svg'
import LinkedIn from '../../assets/contact/linkedin-svgrepo-com.svg'
import Gmail from '../../assets/contact/gmail-svgrepo-com.svg'
import WhatsApp from '../../assets/contact/whatsapp-svgrepo-com.svg'
import Telegram from '../../assets/contact/telegram-svgrepo-com.svg'
import ContactCard from '../../UI/ContactCard/ContactCard'

import './Footer.scss'

const myContact = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/zohid.mustafoyev/',
    image: facebook
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Zohid7717',
    image: GitHub
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zohid-mustafoyev-199024273/',
    image: LinkedIn
  },
  {
    name: 'Gmail',
    url: 'mailto:777aaauz@gmail.com',
    image: Gmail
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+998910012565',
    image: WhatsApp
  },
  {
    name: 'Telegram',
    url: 'https://telegram.im/@Zokhid7717',
    image: Telegram
  },
]

const Footer: FC = () => {
  return <div className='footer'>
    <UContainer>
      <div className="footer__wrap">
        {myContact.map((item) => <ContactCard name={item.name} url={item.url} image={item.image} />)}
      </div>
    </UContainer>
  </div>
}

export default Footer