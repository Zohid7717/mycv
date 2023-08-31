import { FC } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import './SecrionTitle.scss'

type SectionTitleProps = { title: string }

const SectionTitle: FC<SectionTitleProps> = ({title}) => {
  return <div className='sectionTitle'>
    <div className='downPointer'>
      <BsArrowDown className='downPointer__arrow' />
    </div>
    <p className='sectionTitle__title'>{title}</p>
  </div>
}

export default SectionTitle