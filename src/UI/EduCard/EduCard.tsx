import { FC } from 'react'

import './EduCard.scss'

type EduCardProps = { name: string, date: string, faculty: string, image: string }

const EduCard: FC<EduCardProps> = ({ name, date, faculty, image}) => {
  return <div className='eduCard'>
    <p className="eduCard__name">{name}</p>
    <div className="eduCard__faculty">
      <p>Факультет:</p>
      <p>{faculty}</p>
    </div>
    <div className="eduCard__date">
      <p>Начало учебы:</p>
      <p>{date}</p>
    </div>
    <div className="eduCard__img">
      <img src={image} alt="skillImg" />
    </div>
  </div>
}

export default EduCard