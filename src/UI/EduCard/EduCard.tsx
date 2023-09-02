import { FC } from 'react'

import './EduCard.scss'

type EduCardProps = { name: string, date: string, faculty: string, image: string }

const EduCard: FC<EduCardProps> = ({ name, date, faculty, image }) => {
  return <div className='eduCard'>
    <div className="eduCard__img">
      <img src={image} alt="skillImg" />
    </div>
    <div className="eduCard__text">
      <p className="eduCard__name">{name}</p>
      <div className="eduCard__faculty">
        <div>
          <p>Факультет:</p>
          <p>{faculty}</p>
        </div>
        <div>
          <p>Период обучения:</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  </div>
}

export default EduCard