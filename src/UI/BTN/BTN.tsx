import { FC } from 'react'
import './BTN.scss'

const BTN: FC<{text?:string}>= ({text}) => {
  return <div className='btn'>
    <span className="btn__line btn__line--top"></span>
    <span className="btn__line btn__line--right"></span>
    <span className="btn__line btn__line--button"></span>
    <span className="btn__line btn__line--left"></span>
    {text}
  </div>
}

export default BTN