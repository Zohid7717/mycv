import { FC } from 'react'
import UContainer from '../../../components/UContainer/UContainer'
import EduCard from '../../../UI/EduCard/EduCard'
import BKT from '../../../assets/edu/BKT.avif'
import BMTI from '../../../assets/edu/BMTI.avif'
import NT from '../../../assets/edu/NT.avif'


import './MyEducation.scss'
import SectionTitle from '../../../UI/SectionTitle/SectionTitle'

const myEdu = [
  {
    name: "Бухарский Инженерно-Технологический Институт",
    date: "01.09.2009-",
    faculty: "Менеджмент и Управления",
    image: BMTI
  },
  {
    name: "Бухарский Колледж Туризма",
    date: "01.09.2002",
    faculty: "Ремонт компьютеров и офисной техники",
    image: BKT
  },
  {
    name: "Natot Ta'lim",
    date: "01.11.2022",
    faculty: "Frontend Develouper",
    image: NT
  },
]

const MyEducation: FC = () => {
  return <div className='myEdu'>
    <UContainer>
    <div className="myEdu__wrap">
        <div className="myEdu__title">
          <SectionTitle title='My Educations'/>
        </div>
        <div className="myEdu__card-wrap">
          {
            myEdu.map((item) => <EduCard name={item.name} date={item.date} faculty={ item.faculty} image={item.image} />)
          }
        </div>
      </div>
    </UContainer>
  </div>
}

export default MyEducation