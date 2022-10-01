import React, { useEffect, useState } from 'react'

const TotalRecieved = () => {
    const [data, setData] = useState(0);
    const url = 'http://192.168.1.103:8000/total_amount_recieved';

    const apiData = () => {
        const res = fetch(url)
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setData(data)
                return data
            })
    }
    useEffect(() => {
        apiData();
    }, [])



    console.log(data)
    return (
        <div>
            <h2 className='text-3xl text-green-600 font-semibold'>AED {data}</h2>
            
        </div>
    )
}

export default TotalRecieved