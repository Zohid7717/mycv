import { FC, ReactNode } from 'react';

import './UContainer.scss'

const UContainer: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className='container'>
    {children}
  </div>
}

export default UContainer