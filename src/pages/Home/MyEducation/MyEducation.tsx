import { FC } from 'react'
import UContainer from '../../../components/UContainer/UContainer'
import EduCard from '../../../UI/EduCard/EduCard'
import BKT from '../../../assets/edu/BKT.avif'
import BMTI from '../../../assets/edu/BMTI.avif'
import NT from '../../../assets/edu/NT.avif'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../../UI/SectionTitle/SectionTitle'

import './MyEducation.scss'



const MyEducation: FC = () => {
  const { t } = useTranslation()
  const myEdu = [
    {
      name: "Bukhara Engineering and Technology Institute",
      date: "01.09.2009-07.07.2013",
      faculty: "Business and Management",
      image: BMTI
    },
    {
      name: "Bukhara College of Tourism",
      date: "01.09.2002-07.07.2005",
      faculty: "Computer and Office Equipment Repair",
      image: BKT
    },
    {
      name: "Natot Ta'lim",
      date: "01.11.2022-01.05.2023",
      faculty: "Frontend Develouper",
      image: NT
    },
  ]
  return <div className='myEdu'>
    <UContainer>
    <div className="myEdu__wrap">
        <div className="myEdu__title">
          <SectionTitle title={ t("home-edu.content-title")} />
        </div>
        <div className="myEdu__card-wrap">
          {
            myEdu.map((item, i) => <EduCard key={i} name={item.name} date={item.date} faculty={ item.faculty} image={item.image} />)
          }
        </div>
      </div>
    </UContainer>
  </div>
}

export default MyEducation