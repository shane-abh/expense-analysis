import React from 'react'
import Atm_deposit_table from '../components/tables/Atm_deposit_table'
import ATM_withdrawals_table from '../components/tables/ATM_withdrawals_table'
import P2P_tab from '../components/tables/P2P_tab'

const ATM = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-orange-400 w-full h-full'>
        <h2 className='text-center'>ATM Transactions</h2>
      <div className=' p-2 grid grid-cols-2  content-center text-center'>
        
        <ATM_withdrawals_table/>
        <Atm_deposit_table />
      </div>
    </div>
  )
}

export default ATM