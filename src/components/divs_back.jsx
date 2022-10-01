import React from 'react'
import BalanceChart_purchase from './charts/BalanceChart_purchase';
import Goals_table from './tables/Goals_table';

const divs_back = () => {
  return (
    <div className='bg-cyan-500 p-2 '>
    <div className='bg-red-500 content-center text-center p-1'>
      div1
      
      <div className='p-4 bg-slate-300 m-3 items-center'>
        <h2>Balance Chart</h2>
        <BalanceChart_purchase/>
      </div>
    </div>

    

    <div className='bg-yellow-200 p-4 grid grid-cols-2 gap-4 content-center text-center'>
              
      <div className='bg-gray-400  flex float-left p-2'>
        <h1>Total Amount Spent</h1>

        
      </div>

      <div className='bg-green-500 flex float-left p-2 '>
        <h1>Total Amount Earned</h1>
      </div>
    </div>

    <div className='bg-blue-500 p-4 grid grid-cols-3 gap-4 content-center text-center'>
      
      <div className='bg-slate-100 rounded-md p-2 h-40'>
        <h1>Some Value</h1>
      </div>

      <div className='bg-slate-100 rounded-md p-2 h-40'>
        <h1>Pie Chart</h1>
      </div>

      <div className='bg-slate-100 rounded-md p-2 h-40'>
        <h1>Some Value</h1>
      </div>
    </div>

    <div className='bg-purple-500 text-center p-1' >
      <h1>Tables</h1>
      <Goals_table/>
    </div>
   
    </div>
  )
}

export default divs_back