import { FC } from 'react'
import UContainer from '../../../components/UContainer/UContainer'
import HTML from '../../../assets/skills/html5-02-svgrepo-com.svg'
import CSS from '../../../assets/skills/css3-02-svgrepo-com.svg'
import GIT from '../../../assets/skills/git-svgrepo-com.svg'
import SCSS from '../../../assets/skills/brand-sass-svgrepo-com.svg'
import GitHub from '../../../assets/skills/github-142-svgrepo-com.svg'
import JS from '../../../assets/skills/brand-javascript-svgrepo-com.svg'
import ReactJS from '../../../assets/skills/react-svgrepo-com.svg'
import Adaptive from '../../../assets/skills/responsive-svgrepo-com.svg'
import Figma from '../../../assets/skills/figma-svgrepo-com.svg'
import BEM from '../../../assets/skills/bem-svgrepo-com.svg'
import ReduxTK from '../../../assets/skills/redux-svgrepo-com.svg'
import MaterialUI from '../../../assets/skills/materialui-svgrepo-com.svg'
import MongoDB from '../../../assets/skills/mongodb-svgrepo-com.svg'
import SkillCard from '../../../UI/SkillCard/SkillCard'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../../UI/SectionTitle/SectionTitle'

import './MySkills.scss'

const mySkills = [
  {
    name: "HTML",
    date: "15.01.2022",
    image: HTML
  },
  {
    name: "CSS",
    date: "15.01.2022",
    image: CSS
  },
  {
    name: "GIT",
    date: "03.03.2022",
    image: GIT
  },
  {
    name: "SCSS",
    date: "20.01.2022",
    image: SCSS
  },
  {
    name: "GitHub",
    date: "06.03.2022",
    image: GitHub
  },
  {
    name: "JavaScript",
    date: "18.01.2022",
    image: JS
  },
  {
    name: "ReactJS",
    date: "03.03.2023",
    image: ReactJS
  },
  {
    name: "Adaptive",
    date: "14.04.2022",
    image: Adaptive
  },
  {
    name: "Figma",
    date: "17.02.2022",
    image: Figma
  },
  {
    name: "BEM",
    date: "22.05.2022",
    image: BEM
  },
  {
    name: "Redux toolkit",
    date: "05.06.2022",
    image: ReduxTK
  },
  {
    name: "MaterialUI",
    date: "05.06.2022",
    image: MaterialUI
  },
  {
    name: "MongoDB",
    date: "20.06.2022",
    image: MongoDB
  },
]

const MySkills: FC = () => {
  const { t } = useTranslation()

  return <div className='mySkills'>
    <UContainer>
      <div className="mySkills__wrap">
        <div className="mySkills__title">
          <SectionTitle title={ t("home-skills.content-title")} />
        </div>
        <div className="mySkills__card-wrap">
          {
            mySkills.map((item, i) => <SkillCard key={i} name={item.name} date={item.date} image={item.image} />)
          }
        </div>
      </div>
    </UContainer>
  </div>
}

export default MySkills