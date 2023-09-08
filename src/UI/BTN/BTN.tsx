import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/store';

import './BTN.scss'

const BTN: FC<{ text?: string, value: string }> = ({ text, value }) => {
  const activePage = useSelector((state: RootStore) => state.activePageSlice.value)

  return <div className={activePage === value ? 'btn btn__active' : 'btn'}>
    <span className="btn__line btn__line--top"></span>
    <span className="btn__line btn__line--right"></span>
    <span className="btn__line btn__line--button"></span>
    <span className="btn__line btn__line--left"></span>
    {text}
  </div>
}

export default BTN