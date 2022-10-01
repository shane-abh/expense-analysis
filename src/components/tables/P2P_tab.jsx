import React from 'react';
import '../../App.css';
import { useEffect, useState } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';


const P2P_tab = () => {
  const [data, setData] = useState(0);
  const [amtSent, setAmtSent] = useState(0);
  const [amtRecieved, setAmtRecieved] = useState(0);
  const url = 'http://192.168.1.103:8000/p2p';



  const apiData = () => {
    const res = fetch(url)
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)

        setAmtRecieved(data.p2p_recieved)
        setAmtSent(data.p2p_sent)
        // setData(data.purchase)

        const d = JSON.parse(data.p2p);
        console.log(d)
        const date = d['DATE']
        const balance = d['BALANCE']

        console.log(date)

        const sample = Object.keys(d.BALANCE).map(key => ({
          'Date': new Date(parseInt(d.DATE[key])).toDateString(),
          'Description': d.DESCRIPTION[key],
          'Balance': d.BALANCE[key],
          'Amount': d['AMOUNT (AED)'][key]
        }));
        // console.log(sample)
        setData(sample)
        return data
      })
  }
  useEffect(() => {
    apiData();
  }, [])



  console.log(data)








  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-5 rounded-xl bg-white'>


        <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
          <ColumnsDirective>
            <ColumnDirective field='Date' width='50' textAlign="Left" />
            <ColumnDirective field='Description' width='100' />
            <ColumnDirective field='Balance' width='70' />
            <ColumnDirective field='Amount' width='70' />

          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
      </div>

      <div className='m-2 md:m-10 p-2 md:p-4 bg-gray-300 rounded-xl grid grid-cols-2 gap-4 content-center 
                        text-center font-semibold '>
        <h2>Amount Sent : <span className='text-red-600 font-bold'>{amtSent}</span></h2>
        <h2>Amount Received: <span className='text-green-600 font-bold'>{amtRecieved}</span> </h2>
      </div>

    </div>
  );
}

export default P2P_tab