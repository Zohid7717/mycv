import { FC } from 'react'
import './SkillCard.scss'

type SkillCardProps = { name: string, date: string, image: string }

const SkillCard: FC<SkillCardProps> = ({ name, date, image }) => {
  return <div className='skillCard'>
    <p className="skillCard__name">{name}</p>
    <div className="skillCard__date">
      <p>Дата начало использование инструмента:</p>
      <p>{date}</p>
    </div>
    <div className="skillCard__img">
      <img src={image} alt="skillImg" />
    </div>
  </div>
}

export default SkillCard