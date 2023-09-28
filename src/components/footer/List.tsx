import React from 'react'
import { footerList } from './footerList'

const List = () => {
  return (
    <div className='d-flex justify-content-center div-list flex-wrap '>
        {footerList.map(l => (
            <span className='text-light list' key={l}>{l}</span>
        ))}
    </div>
  )
}

export default List