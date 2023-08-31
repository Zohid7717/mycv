import { FC } from 'react'
import Hero from './Hero/Hero'
import MySkills from './MySkills/MySkills'
import MyEducation from './MyEducation/MyEducation'

const Home: FC = () => {
  return <>
    <Hero />
    <MySkills />
    <MyEducation />
  </>
}

export default Home