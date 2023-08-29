import { FC } from 'react'
import UContainer from '../../../components/UContainer/UContainer'
import HTML from '../../../assets/skills/HTML-img.avif'
import CSS from '../../../assets/skills/CSS-img.avif'
import GIT from '../../../assets/skills/git-img.avif'
import SCSS from '../../../assets/skills/sass-img.avif'
import GitHub from '../../../assets/skills/github-img.avif'
import JS from '../../../assets/skills/JS-img.avif'
import ReactJS from '../../../assets/skills/ReactJS-img.avif'
import Adaptive from '../../../assets/skills/adaptive-img.avif'
import Figma from '../../../assets/skills/figma-img.avif'
import BEM from '../../../assets/skills/bem-img.avif'
import ReduxTK from '../../../assets/skills/redux-img.avif'
import MaterialUI from '../../../assets/skills/material ui-img.avif'
import MongoDB from '../../../assets/skills/mongodb-img.avif'

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
    name: "Adaptive layout",
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

  return <div className='mySkills'>
    <UContainer>
      <div className="mySkills__wrap">
        <div className="mySkills__title">
          <img src="" alt="" />
          <p>My Skills</p>
        </div>
        <div className="mySkills__card">

        </div>
      </div>
    </UContainer>
    MySkills
  </div>
}

export default MySkills