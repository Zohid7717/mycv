import { FC } from 'react'

import './ContactCard.scss'

type ContactCardProps = { name: string, url: string, image: string }

const ContactCard: FC<ContactCardProps> = ({ name, url, image }) => {
  return <div className='contactCard'>
    <a href={url} className="contactCard__link">
      <img src={image} alt={name} />
    </a>
  </div>
}

export default ContactCard