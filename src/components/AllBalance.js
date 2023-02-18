import React from 'react'
import BalanceItem from './BalanceItem'

const AllBalance = () => {
  return (
    <div className='d-flex'>
      <BalanceItem money={5}/>
      <BalanceItem money={10}/>
      <BalanceItem money={50}/>
      <BalanceItem money={100}/>
    </div>
  )
}

export default AllBalance
