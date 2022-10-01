import React from 'react'
import Purchase_expense_monthly from '../components/charts/Purchase_expense_monthly'
import Purchase_tab from '../components/tables/Purchase_tab'


const Purchase = () => {
    return (
        <div className='bg-gradient-to-r from-pink-500 to-orange-400'>
            <div className=' p-2 mb-2'>
                <h2 className='text-center'>Total Purchases</h2>
                <Purchase_tab />
            </div>
            <div className=' p-2'>
                <Purchase_expense_monthly/>

            </div>
        </div>
    )
}

export default Purchase