import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActivePage } from '../../redux/activePage/activePage'
import myWorks from './WorkData'
import UContainer from '../../components/UContainer/UContainer'
import './Work.scss'
import WorkCard from '../../UI/WorkCard/WorkCard'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'


const Work: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActivePage('/work'))
  }, [])

  return <div className='work'>
    <div className="work__hero">
    </div>
    <UContainer>
      <SectionTitle title='My Works'/>
      <div className="work__container">
        {
          myWorks.map((item, i) => (
            <WorkCard
              key={i}
              name={item.name}
              data={item.data}
              stacks={item.stacks}
              info={item.info}
              image={item.image}
              images={item.images}
              url={item.url}
            />
          ))
        }
      </div>
    </UContainer>
  </div>
}

export default Work