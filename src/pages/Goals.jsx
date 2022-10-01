import React from 'react'
import Goals_table from '../components/tables/Goals_table'

const Goals = () => {
    return (
        <div>
            <div className=' p-2 mb-2 bg-gradient-to-r from-pink-500 to-orange-400'>
                <h2 className='text-center'>Transaction in Goals</h2>
                <Goals_table />
            </div>

            
        </div>
    )
}

export default Goals