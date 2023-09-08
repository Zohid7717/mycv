import { FC } from 'react'

import './ContactCard.scss'

type ContactCardProps = { url: string, image: any }

const ContactCard: FC<ContactCardProps> = ({ url, image }) => {
  return <div className='contactCard'>
    <a href={url} target='_blank' className="contactCard__link">
      <div className="contactCard__img">
        {image}
      </div>
    </a>
  </div>
}

export default ContactCard