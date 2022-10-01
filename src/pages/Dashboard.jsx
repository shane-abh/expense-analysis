import React from 'react'
import BalanceChart from '../components/charts/BalanceChart_purchase';
import TotalRecieved from '../components/dataComponents/TotalRecieved';
import TotalSpent from '../components/dataComponents/TotalSpent';


const Dashboard = () => {
    return (
        <div>
            
            <div className='bg-slate-500 p-2 m-2 bg-gradient-to-r from-pink-500 to-orange-400'>
                
                

                <div className=' p-2 mb-2 '>
                    <h2 className='text-center'>Balance Chart</h2>
                    <BalanceChart/>
                </div>

                <div className='p-4 grid grid-cols-2 gap-4 content-center text-center'>

                    <div className='bg-gray-400  float-left p-2 rounded-2xl'>
                        <h1>Total Amount Spent</h1>
                        
                        <TotalSpent/>
                        


                    </div>

                    <div className='bg-gray-400  float-left p-2 rounded-2xl '>
                        <h1>Total Amount Earned</h1>
                        <TotalRecieved/>
                    </div>
                </div>
                <div className=' p-2 mt-3 text-center'>
                    <h2>More Details</h2>
                    <div className=' p-4 grid grid-cols-4 gap-4 content-center text-center'>

                        <button type='button' className='bg-blue-600 rounded-xl p-2 '>Goals</button>
                        <button type='button' className='bg-blue-600 rounded-xl p-2'>Purchase</button>
                        <button type='button' className='bg-blue-600 rounded-xl p-2'>P2P</button>
                        <button type='button' className='bg-blue-600 rounded-xl p-2'>Other Accounts</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard;