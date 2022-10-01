import React from 'react';
import '../../App.css';
import { useEffect, useState } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

const Goals_table = () => {
  const [data, setData] = useState(0);
  const [total, setTotal] = useState(0);
  const url = 'http://192.168.1.103:8000/goals';



  const apiData = () => {
    const res = fetch(url)
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        // setData(data.purchase)
        setTotal(data.total)
        const d = JSON.parse(data.goals);
        console.log(d)
        // const date = d['DATE']
        // const balance = d['BALANCE']

        // console.log(date)

        const sample = Object.keys(d.BALANCE).map(key => ({
          'Date': new Date(parseInt(d.DATE[key])).toDateString(),
          'Description': d.DESCRIPTION[key],
          'Balance': d.BALANCE[key],
          'Amount': d['AMOUNT (AED)'][key],

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
      <div className='m-2 md:m-10 p-2 md:p-5 bg-white rounded-xl'>


        <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
          <ColumnsDirective>
            <ColumnDirective field='Date' width='100' textAlign="Left" />
            <ColumnDirective field='Description' width='100' />
            <ColumnDirective field='Balance' width='100' />
            <ColumnDirective field='Amount' width='100' />

          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>


      </div>

      <div className=' bg-gray-400 p-2 m-5 grid grid-cols-2 gap-4 content-center 
                        text-center text-white rounded-2xl text-xl font-semibold'>
        <div className=''>
          <h2>Total Balance:</h2>
        </div>
        <div className=' '>
          <h2 className=''>{total}</h2>
        </div>
      </div>

    </div>





  );
}

export default Goals_table