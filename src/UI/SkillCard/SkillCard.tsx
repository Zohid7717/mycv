import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import './SkillCard.scss'

type SkillCardProps = { name: string, date: string, image: string }

const SkillCard: FC<SkillCardProps> = ({ name, date, image }) => {
  const { t } = useTranslation()
  return <div className="skillCard">
    <div className="skillCard__face skillCard__face1">
      <div className="skillCard__img">
        <img src={image} alt="skillImg" />
      </div>
    </div>
    <div className="skillCard__face skillCard__face2">
      <div className="skillCard__content">
        <p className="skillCard__name">{name}</p>
        <p className="skillCard__date">{t("home-skills.card-text") }</p>
        <p className="skillCard__date">{date}</p>
      </div>
    </div>
  </div>

}

export default SkillCard