import { FC, useEffect } from 'react'
import Hero from './Hero/Hero'
import MySkills from './MySkills/MySkills'
import MyEducation from './MyEducation/MyEducation'
import {useDispatch} from 'react-redux'
import { setActivePage } from '../../redux/activePage/activePage'

const Home: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActivePage('/'))
  },[])
  return <>
    <Hero />
    <MySkills />
    <MyEducation />
  </>
}

export default Home