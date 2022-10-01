import React from 'react'
import P2P_tab from '../components/tables/P2P_tab'

const P2P = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-orange-400'>
      <div className='p-2 mb-2  rounded-2xl'>
        <h2 className='text-center'>Liv P2P Transactions</h2>
        <P2P_tab />
      </div>

      <div>

      </div>
    </div>
  )
}

export default P2P